import React, { useEffect, useState, useRef } from "react";
import { Avatar, Button, Col, Input, Row, Typography } from "antd";
import chatBot from "../../assets/Chatbot.svg";
import { Icon } from "@iconify/react";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";

const ChatWindow = () => {
  const [data, setData] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [question, setQuestion] = useState("");
  const lastMessageRef:any = useRef(null);

  async function fetchData() {
    try {
      let tempData = [...data];
      const answer = await axios.get(
        "http://20.213.35.159:8080/askme/airline?data=" + question
      );
      let newData:any = [...tempData];
      newData[newData.length - 1].answer = answer.data.answer;
      newData[newData.length - 1].isLoading = false;
      setData(newData);
    } catch (e) {
      let tempData:any = [...data];
      let newData:any = [...tempData];
      if (newData.length > 0) {
        newData[newData.length - 1].answer =
          "Oops,something went wrong. Please try again later.";
        newData[newData.length - 1].isLoading = false;
        setData(newData);
        console.log(e);
      }
    }
  }
  useEffect(() => {
    fetchData();
  }, [question]);
  const addNew = (question:any) => {
    console.log("data checking", data);
    question = question.trim();
    if (question.length === 0) return;
    let tempData:any = [...data];
    let obj = {
      question: question,
      answer: "",
      isLoading: true,
    };
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
          minHeight: "calc(100vh - 60px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Row>
          <Col span={24}></Col>
        </Row>
        {data.length === 0 && (
          <Row>
            <Col span={24} style={{ marginBottom: 0, textAlign: "center" }}>
              <Typography.Text>Ask AI to find anything</Typography.Text>
            </Col>
          </Row>
        )}
        <Row>
          <Col span={24} style={{ marginBottom: 20 }}>
            <Row>
              {data.length === 0 && (
                <Col span={24}>
                  <div>
                    <Row>
                      <Col span={3}></Col>
                      <Col span={21}></Col>
                    </Row>
                    <Row>
                      <Col span={21}>
                        {/* <Fade direction="left" triggerOnce> */}
                        <div
                          className="items-center"
                          style={{ display: "flex", marginBottom: 20 }}
                        >
                          <div
                            className="border-2 rounded-3xl p-2"
                            style={{
                              display: "flex",
                              alignItems: "flex-end",
                              marginRight: 10,
                            }}
                          >
                            <img src={chatBot} style={{ maxWidth: 48 }} />
                          </div>

                          <div
                            style={{
                              background: "#fff",
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
                            Hlo, How Can I Help You Today !
                          </div>
                        </div>
                        {/* </Fade> */}
                      </Col>
                      <Col span={3}></Col>
                    </Row>
                  </div>
                </Col>
              )}
              {data &&
                data.map((item, chatIndex) => (
                  <Col span={24} key={`chat${chatIndex}`}>
                    <div key={`chat${chatIndex}`} ref={chatIndex === data.length - 1 ? lastMessageRef : null}>
                      <Row>
                        <Col span={3}></Col>
                        <Col span={21}>
                          {/* <Fade direction="right" triggerOnce> */}

                          <div
                            className="items-center"
                            style={{ display: "flex", marginBottom: 20 }}
                          >
                            <div
                              style={{
                                background: "#0b4266",
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
                              <div className="textSmall">{item.question}</div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "flex-end",
                                marginLeft: 10,
                              }}
                            >
                              <Avatar icon={<UserOutlined />} />
                            </div>
                          </div>
                          {/* </Fade> */}
                        </Col>
                      </Row>
                      <Row>
                        <Col span={21}>
                          {/* <Fade direction="left" triggerOnce> */}
                          <div
                            className="items-center"
                            style={{ display: "flex", marginBottom: 20 }}
                          >
                            <div
                              className="border-2 rounded-3xl p-2"
                              style={{
                                display: "flex",
                                alignItems: "flex-end",
                                marginRight: 10,
                              }}
                            >
                              <img src={chatBot} style={{ maxWidth: 48 }} />
                            </div>

                            <div
                              style={{
                                background: "#fff",
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
                              {item.isLoading && (
                                <Icon
                                  icon="eos-icons:three-dots-loading"
                                  color="#29256e"
                                  fontSize={24}
                                />
                              )}
                              {!item.isLoading && (
                                <div style={{ fontSize: 14, fontWeight: 400 }}>
                                  {typeof item.answer === "string" ? (
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item.answer,
                                      }}
                                      className="white-space-pre-line"
                                    ></div>
                                  ) : (
                                    ""
                                  )}
                                  {/*</Fade>*/}
                                </div>
                              )}
                            </div>
                          </div>
                          {/* </Fade> */}
                        </Col>
                        <Col span={3}></Col>
                      </Row>
                    </div>
                  </Col>
                ))}
              <Col span={24}>
                <div style={{ display: "flex" }}>
                  <div style={{ paddingTop: 0, width: "100%" }}>
                    <div style={{ marginTop: 20 }}>
                      <div style={{ display: "flex", margin: "10px",marginBottom:'20px'}}>
                        <Input
                          placeholder="Ask AI to find anything"
                          style={{ height: 42 }}
                          value={searchText}
                          onChange={(e) => {
                            setSearchText(e.target.value);
                          }}
                          onPressEnter={(e) => addNew(searchText)}
                        />
                        <Button
                          type="primary"
                          className="btn-primary"
                          style={{
                            height: 42,
                            borderRadius: "24 !important",
                            marginLeft: -50,
                            minWidth: 100,
                          }}
                          onClick={() => addNew(searchText)}
                        >
                          ASK
                        </Button>
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
export default ChatWindow;
