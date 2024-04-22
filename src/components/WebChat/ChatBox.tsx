import React, { useEffect, useState, useRef } from "react";
import ChatBot from "../../assets/Chatbot.svg";
import { ColumnsType } from "antd/es/table";
import {
  Avatar,
  Col,
  Input,
  Row,
  Upload,
  Space,
  Tooltip,
  Table,
  Card,
} from "antd";

import {
  InboxOutlined,
  UserOutlined,
  LikeOutlined,
  DislikeOutlined,
  LikeFilled,
  DislikeFilled,
  // DeleteOutlined,
} from "@ant-design/icons";
import { Icon } from "@iconify/react";
import refreshOutline from "@iconify/icons-basil/refresh-outline";
import Chatbg from "../../assets/chatbg.jpg";
import axios from "axios";
import "../../components/WebChat/WebChat.css";

const API_BASE_URL = "http://4.193.34.131:8080";

const ChatBox = () => {
  const [data, setData] = useState<any[]>([]);
  const [excel, setExcel] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [forceFetch, setForceFetch] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>("");
  const lastMessageRef:any = useRef(null);
  const [pdfUploaded, setPdfUploaded] = useState<boolean>(false);
  const [fileList, setFileList] = useState<any[]>([]);
  const [likes, setLikes] = useState<any[]>([]);
  const [dislikes, setDislikes] = useState<any[]>([]);
  const [generates, setGenerates] = useState<any[]>([]);
  const suggestions = [
    "What is the Debt ratio and Equity ratio in this model?",
    "Provide me bar graph for gross income value based on end year in dollars",
    "Summarize the financial model based on project milestone, financing and returns",
    "Provide me the details of debt structure of the project(with tenors, interest and total debt)",
  ];
  const handleLike = async (index:any) => {
    setLikes((prevLikes) => [...prevLikes.slice(0, index), !prevLikes[index]]);
  };

  const handleDislike = async (index:any) => {
    setDislikes((prevDislikes) => [
      ...prevDislikes.slice(0, index),
      !prevDislikes[index],
    ]);
  };

  const handleGenerate = async (index:any, item:any) => {
    try {
      setData((prevData) => {
        const updatedData = [...prevData];
        updatedData[index].isLoading = true;
        return updatedData;
      });
      if (
        item?.question?.includes("chart") ||
        item?.question?.includes("graph") ||
        item?.question?.includes("Graph") ||
        item?.question?.includes("Chart")
      ) {
        const answer = await axios.get(
          `http://4.193.105.54:8080/receive_csv/?query=${item?.question}&data=true`
        );
        setData((prevData) => {
          const updatedData = [...prevData];
          updatedData[index].answer = answer?.data?.data?.answer?.response;
          updatedData[index].isLoading = false;
          return updatedData;
        });

        setLikes((prevLikes) => [...prevLikes.slice(0, index), false]);
        setDislikes((prevDislikes) => [...prevDislikes.slice(0, index), false]);
      } else {
        const answer = await axios.get(
          `${API_BASE_URL}/unstructured/askme/?query=${item?.question}&data=false`
        );
        if (answer?.data?.answer?.response?.includes("|")) {
          const rows = answer.data.answer.response
            .split("\n")
            .map((line:any) => line.trim())
            .filter(Boolean);

          const headings = rows[0]
            .split("|")
            .map((heading:any) => heading.trim())
            .filter(Boolean);

          const dataRows = rows.slice(2).map((row:any) => {
            const rowData = row
              .split("|")
              .map((cell:any) => cell.trim())
              .filter(Boolean);
            return rowData;
          });

          setData((prevData) => {
            const updatedData = [...prevData];
            updatedData[index].answer = answer?.data?.answer?.response;
            updatedData[index].isLoading = false;
            updatedData[index].headers = headings;
            updatedData[index].rows = dataRows;
            return updatedData;
          });
        }

        setData((prevData) => {
          const updatedData = [...prevData];
          updatedData[index].answer = answer?.data?.answer?.response;
          updatedData[index].isLoading = false;
          return updatedData;
        });

        setLikes((prevLikes) => [...prevLikes.slice(0, index), false]);
        setDislikes((prevDislikes) => [...prevDislikes.slice(0, index), false]);
      }
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
      const tempData = [...data];
      if (
        question.includes("chart") ||
        question.includes("graph") ||
        question.includes("Graph") ||
        question.includes("Chart")
      ) {
        const answer = await axios.get(
          `http://4.193.105.54:8080/receive_csv/?query=${question}&data=true`
        );
        const newData = [...tempData];
        newData[newData.length - 1].answer =
          answer?.data?.data?.answer?.response ||
          "Oops, something went wrong. Please try again later.";
        newData[newData.length - 1].isLoading = false;
        setData(newData);
      } else {
        const answer = await axios.get(
          `${API_BASE_URL}/unstructured/askme/?query=${question}&data=false`
        );
        const newData = [...tempData];
        newData[newData.length - 1].answer =
          answer?.data?.answer?.response ||
          "Oops, something went wrong. Please try again later.";
        if (answer?.data?.answer?.response?.includes("|")) {
          const rows = answer.data.answer.response
            .split("\n")
            .map((line:any) => line.trim())
            .filter(Boolean);

          const headings = rows[0]
            .split("|")
            .map((heading:any) => heading.trim())
            .filter(Boolean);

          const dataRows = rows.slice(2).map((row:any) => {
            const rowData = row
              .split("|")
              .map((cell:any) => cell.trim())
              .filter(Boolean);
            return rowData;
          });
          newData[newData.length-1].headers = headings
          newData[newData.length-1].rows = dataRows
        }
        newData[newData.length - 1].isLoading = false;
        setData(newData);

      }
    } catch (e) {
      const tempData = [...data];
      const newData = [...tempData];
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
    const fetchPdfNames = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/uploaded/excel_names`
        );
        setFileList(response?.data?.uploaded_excels);
      } catch (error) {
        console.error("Error fetching Excel names:", error);
      }
    };
    fetchPdfNames();
    setExcel(false);
  }, [excel]);

  // const handleDelete = (key) => {
  //   console.log(key);
  // };

  const columns: ColumnsType<any> = [
    {
      title: "S.No",
      dataIndex: "index",
      key: "index",
      align: "center",
    },
    {
      title: "Uploaded Files",
      dataIndex: "pdfname",
      key: "pdfname",
      render: (text:any) => <span style={{ fontSize: "16px" }}>{text}</span>,
      align: "left",
    },
    // {
    //   title: "Action",
    //   key: "delete",
    //   align: "center",
    //   render: (record) => (
    //     <DeleteOutlined
    //       onClick={() => handleDelete(record.key)}
    //       className="icon-wrapper"
    //     />
    //   ),
    // },
  ];
  const dataWithIndex = fileList?.map((item, index) => ({
    ...item,
    index: index + 1,
    pdfname: item,
  }));

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
    const tempData = [...data];
    const obj = {
      question: question,
      answer: "",
      isLoading: true,
      headers: [],
      rows: [],
    };

    setLikes((prevLikes) => [...prevLikes, false]);
    setDislikes((prevDislikes) => [...prevDislikes, false]);
    setGenerates((prevGenerates) => [...prevGenerates, false]);

    tempData.push(obj);
    setData([...data, obj]);
    setSearchText("");
    setQuestion(question);
  };
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);
  const handleSuggestionClick = (suggestion:any) => {
    addNew(suggestion);
  };

  const handleFileChange = async (file:any) => {
    if (file.file) {
      const formData = new FormData();
      formData.append("excel", file.file);
      setPdfUploaded(true);

      try {
        const response = await axios.post(
          `${API_BASE_URL}/upload/excel`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const base64StringFromAPI = response.data.pdf_base64;
        const uint8Array = Uint8Array.from(atob(base64StringFromAPI), (c) =>
          c.charCodeAt(0)
        );
        const pdfFile = new File([uint8Array], "filename.pdf", {
          type: "application/pdf",
        });
        const pdfFormData = new FormData();
        pdfFormData.append("pdf", pdfFile);
        const pdfUploadResponse = await axios.post(
          `${API_BASE_URL}/upload/pdf`,
          pdfFormData
        );
        console.log(pdfUploadResponse);
        setPdfUploaded(false);
        setExcel(true);
      } catch (error) {
        console.error("File upload failed:", error);
        setPdfUploaded(false);
      }
    }
  };

  return (
    <>
      <div className="chat-main-container">
        <Row gutter={32} style={{ marginTop: "50px" }}>
          <Col span={8} style={{ height: "200px" }}>
            <Upload.Dragger
              name="files"
              customRequest={handleFileChange}
              accept=".xlsx, .xls"
              showUploadList={false}
            >
              <p className="ant-upload-drag-icon">
                {pdfUploaded ? (
                  <Icon
                    icon="eos-icons:three-dots-loading"
                    color="#1890ff"
                    fontSize={42}
                  />
                ) : (
                  <InboxOutlined />
                )}
              </p>
              <p className="ant-upload-text">
                {pdfUploaded
                  ? "Processing  Diffen..."
                  : "Click or drag EXCEL file to this area to upload"}
              </p>
              <p className="ant-upload-hint">Upload your Excel files here</p>
            </Upload.Dragger>

            <Table
              dataSource={dataWithIndex}
              columns={columns}
              className="mt-5"
              bordered={true}
              pagination={false}
            />
          </Col>
          <Col span={16}>
            <div className="chat-container">
              {data.length === 0 && (
                <>
                  <Row justify={"center"}>
                    <Col>
                      <img
                        src={Chatbg}
                        alt=""
                        style={{ height: "400px", width: "500px" }}
                      />
                    </Col>
                  </Row>
                  <Row justify="center" gutter={[16, 16]} className="chat-row">
                    {suggestions.map((suggestion, index) => (
                      <Col key={index} span={12}>
                        <Card
                          hoverable
                          onClick={() => handleSuggestionClick(suggestion)}
                          // className="suggestion-chat"
                        >
                          {suggestion}
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  {/* <Row justify={"start"}>
                    <Col>
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
                          <div className="welcome-chat">
                            <img
                              src={ChatBot}
                              style={{ maxWidth: 48 }}
                              alt=""
                            />
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
                  </Row> */}
                </>
              )}
              {data &&
                data.map((item, chatIndex) => (
                  <div key={`chat${chatIndex}`}>
                    <div
                      key={`chat${chatIndex}`}
                      ref={
                        chatIndex === data.length - 1 ? lastMessageRef : null
                      }
                    >
                      <Row>
                        <Col span={16}>
                          <div
                            className="items-center"
                            style={{ display: "flex", marginBottom: 20 }}
                          >
                            <div className="user-chat">
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
                            <div className="bot-chat">
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
                                  src={ChatBot}
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
                                  <div
                                    style={{
                                      fontSize: 14,
                                      fontWeight: 400,
                                      color: "#204496",
                                    }}
                                  >
                                    {typeof item.answer === "string" && (
                                      <>
                                        {item?.answer?.includes("|") ? (
                                          <table
                                            style={{
                                              borderCollapse: "collapse",
                                              width: "100%",
                                            }}
                                          >
                                            <thead>
                                              <tr>
                                                {item?.headers?.map(
                                                  (heading:any, index:any) => (
                                                    <th
                                                      key={index}
                                                      style={{
                                                        border:
                                                          "1px solid black",
                                                        padding: "8px",
                                                      }}
                                                    >
                                                      {heading}
                                                    </th>
                                                  )
                                                )}
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {item?.rows?.map(
                                                (rowData:any, rowIndex:any) => (
                                                  <tr key={rowIndex}>
                                                    {rowData.map(
                                                      (cellData:any, cellIndex:any) => (
                                                        <td
                                                          key={cellIndex}
                                                          style={{
                                                            border:
                                                              "1px solid black",
                                                            padding: "8px",
                                                          }}
                                                        >
                                                          {cellData}
                                                        </td>
                                                      )
                                                    )}
                                                  </tr>
                                                )
                                              )}
                                            </tbody>
                                          </table>
                                        ) : item?.answer?.includes(
                                            "data:image/png;base64"
                                          ) ? (
                                          <>
                                            <img
                                              src={`${item.answer}`}
                                              alt=""
                                              style={{
                                                width: "75%",
                                              }}
                                            />
                                            <br />
                                          </>
                                        ) : (
                                          <div
                                            dangerouslySetInnerHTML={{
                                              __html: item.answer.replace(
                                                /\n/g,
                                                "<br />"
                                              ),
                                            }}
                                            className="white-space-pre-line"
                                          />
                                        )}
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
                                                pointerEvents: likes[chatIndex]
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
                                              className="icon-wrapper"
                                              onClick={() =>
                                                handleGenerate(chatIndex, item)
                                              }
                                            >
                                              {generates[chatIndex] ? (
                                                <Icon
                                                  icon={refreshOutline}
                                                  style={{
                                                    fontSize: "28px",
                                                  }}
                                                />
                                              ) : (
                                                <Icon
                                                  icon={refreshOutline}
                                                  style={{
                                                    fontSize: "28px",
                                                  }}
                                                />
                                              )}
                                            </span>
                                          </Tooltip>
                                        </Space>
                                      </>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                ))}
              <div style={{ paddingTop: 0, width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    margin: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <Input
                    className="chat-input"
                    placeholder="Start Conversation........"
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                    onPressEnter={(e) => addNew(searchText)}
                  />
                  <div
                    className="send-button"
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
      </div>
    </>
  );
};

export default ChatBox;
