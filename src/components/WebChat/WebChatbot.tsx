import React, { useEffect, useState, useRef } from "react";
import { Avatar, Col, Input, Row, Space, Tooltip } from "antd";
import Capa from "../../assets/Capa.svg";
import {
  UserOutlined,
  LikeOutlined,
  DislikeOutlined,
  LikeFilled,
  DislikeFilled,
} from "@ant-design/icons";
import { Icon } from "@iconify/react";
import refreshOutline from "@iconify/icons-basil/refresh-outline";
import axios from "axios";
import Chatbg from "../../assets/chatbg.jpg";
import "../../components/WebChat/WebChat.css";

const WebChatbot = () => {
  const apiBaseUrl = "http://127.0.0.1:8000";

  const [data, setData] = useState<any[]>([]);
  const [forceFetch, setForceFetch] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const lastMessageRef:any = useRef(null);
  const [likes, setLikes] = useState<any[]>([]);
  const [dislikes, setDislikes] = useState<any[]>([]);
  const [generates, setGenerates] = useState<any[]>([]);

  const handleLike = async (index:any) => {
    setLikes((prevLikes) => {
      const updatedLikes = [...prevLikes];
      updatedLikes[index] = !updatedLikes[index];
      return updatedLikes;
    });
    try {
      await axios.post(`${apiBaseUrl}/structured/like/${index}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDislike = async (index:any) => {
    setDislikes((prevDislikes) => {
      const updatedDislikes = [...prevDislikes];
      updatedDislikes[index] = !updatedDislikes[index];
      return updatedDislikes;
    });
    try {
      await axios.post(`${apiBaseUrl}/structured/dislike/${index}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGenerate = async (index:any) => {
    try {
      setData((prevData) => {
        const updatedData = [...prevData];
        updatedData[index].isLoading = true;
        return updatedData;
      });

      const answer = await axios.get(
        `${apiBaseUrl}/credstructured/askme/?text=${data[index].question}`
      );

      setData((prevData) => {
        const updatedData = [...prevData];
        updatedData[index].answer = answer?.data?.answer;
        updatedData[index].isLoading = false;
        return updatedData;
      });

      setLikes((prevLikes) => [...prevLikes.slice(0, index), false]);
      setDislikes((prevDislikes) => [...prevDislikes.slice(0, index), false]);
    } catch (err) {
      console.log(err);
      setData((prevData) => {
        const updatedData = [...prevData];
        updatedData[index].isLoading = false;
        return updatedData;
      });
    }
  };

  async function fetchData() {
    try {
      const answer = await axios.get(
        `${apiBaseUrl}/credstructured/askme/?text=${question}`
      );
      let newData = [...data];
      newData[newData.length - 1].answer =
        answer?.data?.answer ||
        "Oops, something went wrong. Please try again later.";
      newData[newData.length - 1].isLoading = false;
      setData(newData);
    } catch (e) {
      let newData = [...data];
      if (newData.length > 0) {
        newData[newData.length - 1].answer =
          "Oops, something went wrong. Please try again later.";
        newData[newData.length - 1].isLoading = false;
        setData(newData);
        console.log(e);
      }
    }
  }

  useEffect(() => {
    if (forceFetch) {
      fetchData();
      setForceFetch(false);
    }
  }, [question, forceFetch]);

  const addNew = (question:any) => {
    setForceFetch(true);
    question = question.trim();
    if (question.length === 0) return;

    let tempData = [...data];
    let obj = {
      question: question,
      answer: "",
      isLoading: true,
    };

    setLikes((prevLikes) => [...prevLikes, false]);
    setDislikes((prevDislikes) => [...prevDislikes, false]);
    setGenerates((prevGenerates) => [...prevGenerates, false]);

    tempData.push(obj);
    setData([...data, obj]);
    setSearchText("");
    setQuestion(question);

    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px 100px",
          boxSizing: "border-box",
          background: "#fff",
        }}
      >
        <Row></Row>
        {data.length === 0 && (
          <>
            <Row justify={"center"}>
              <Col span={12} style={{ textAlign: "center" }}>
                <img
                  src={Chatbg}
                  alt=""
                  style={{ height: "400px", width: "500px" }}
                />
              </Col>
            </Row>

            <Row justify={"start"}>
              <Col>
                <div className="items-center">
                  <div
                    className="border-2 rounded-3xl p-2"
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginRight: 10,
                    }}
                  >
                    <div
                      style={{
                        background: "#D5DEF1",
                        padding: "12px 24px",
                        boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.16)",
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        display: "flex",
                        width: "100%",
                        alignItems: "flex-end",
                        gap: "10px",
                      }}
                    >
                      <img src={Capa} style={{ maxWidth: 48 }} alt="" />
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 400,
                          color: "#204496",
                        }}
                      >
                        Hello ! How can I assist you today !
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </>
        )}
        <Row style={{ marginTop: "50px" }}>
          <Col span={24} style={{ marginBottom: 20 }}>
            <Row>
              {data &&
                data.map((item, chatIndex) => (
                  <Col span={24} key={`chat${chatIndex}`}>
                    <div
                      key={`chat${chatIndex}`}
                      ref={
                        chatIndex === data.length - 1 ? lastMessageRef : null
                      }
                    >
                      <Row>
                        <Col span={12}>
                          <div
                            className="items-center"
                            style={{ display: "flex", marginBottom: 20 }}
                          >
                            <div
                              style={{
                                background: "#204496",
                                padding: "12px 24px",
                                color: "#fff",
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomLeftRadius: 20,
                                display: "flex",
                                width: "100%",
                                alignItems: "flex-end",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "flex-end",
                                  gap: "10px",
                                }}
                              >
                                <Avatar icon={<UserOutlined />} />
                                <div className="textSmall">{item.question}</div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <div
                            className="items-center"
                            style={{ display: "flex", marginBottom: 20 }}
                          >
                            <div
                              style={{
                                background: "#D5DEF1",
                                padding: "12px 24px",
                                boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.16)",
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 20,
                                display: "flex",
                                width: "100%",
                                alignItems: "flex-end",
                              }}
                            >
                              <div
                                className="border-2 rounded-3xl p-2"
                                style={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  marginRight: 10,
                                  gap: "10px",
                                }}
                              >
                                <img
                                  src={Capa}
                                  style={{ maxWidth: 48 }}
                                  alt=""
                                />

                                {item.isLoading && (
                                  <Icon
                                    icon="eos-icons:three-dots-loading"
                                    color="#29256e"
                                    fontSize={24}
                                  />
                                )}
                                {!item.isLoading && (
                                  <>
                                    <div
                                      style={{
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: "#204496",
                                      }}
                                    >
                                      {typeof item.answer === "string" ? (
                                        <>
                                          <div
                                            dangerouslySetInnerHTML={{
                                              __html: item.answer.replace(
                                                /\n/g,
                                                "<br />"
                                              ),
                                            }}
                                            className="white-space-pre-line"
                                          />

                                          <Space>
                                            <Tooltip title="Good Response">
                                              <span
                                                className="icon-wrapper"
                                                onClick={() =>
                                                  handleLike(chatIndex)
                                                }
                                                style={{
                                                  pointerEvents: dislikes[
                                                    chatIndex
                                                  ]
                                                    ? "none"
                                                    : "auto",
                                                }}
                                              >
                                                {likes[chatIndex] ? (
                                                  <LikeFilled />
                                                ) : (
                                                  <LikeOutlined />
                                                )}
                                              </span>
                                            </Tooltip>
                                            <Tooltip title="Bad Response">
                                              <span
                                                className="icon-wrapper"
                                                onClick={() =>
                                                  handleDislike(chatIndex)
                                                }
                                                style={{
                                                  pointerEvents: likes[
                                                    chatIndex
                                                  ]
                                                    ? "none"
                                                    : "auto",
                                                  paddingTop: "10px",
                                                }}
                                              >
                                                {dislikes[chatIndex] ? (
                                                  <DislikeFilled />
                                                ) : (
                                                  <DislikeOutlined />
                                                )}
                                              </span>
                                            </Tooltip>
                                            <Tooltip title="Regenerate">
                                              <span
                                                className={`icon-wrapper`}
                                                onClick={() =>
                                                  handleGenerate(chatIndex)
                                                }
                                              >
                                                {generates[chatIndex] ? (
                                                  <Icon
                                                    icon={refreshOutline}
                                                    style={{ fontSize: "28px" }}
                                                  />
                                                ) : (
                                                  <Icon
                                                    icon={refreshOutline}
                                                    style={{ fontSize: "28px" }}
                                                  />
                                                )}
                                              </span>
                                            </Tooltip>
                                          </Space>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                ))}

              <Col span={24}>
                <div style={{ display: "flex" }}>
                  <div style={{ paddingTop: 0, width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        margin: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      <Input
                        placeholder="Start Conversation........"
                        style={{
                          height: 42,
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0,
                          border: "1px solid #204496",
                        }}
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                        }}
                        onPressEnter={(e) => addNew(searchText)}
                      />
                      <div
                        style={{
                          height: 42,
                          background: "#204496",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: 15,
                          paddingRight: 15,
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                          cursor: "pointer",
                        }}
                        onClick={() => addNew(searchText)}
                      >
                        <Icon
                          icon="fluent:arrow-right-24-filled"
                          style={{ fontSize: 20 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={4}></Col>
        </Row>
      </div>
    </>
  );
};

export default WebChatbot;
