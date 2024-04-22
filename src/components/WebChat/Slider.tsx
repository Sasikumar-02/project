import React, { useState } from "react";
import { Button, Input, Steps, Select, Row, Col, message, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../components/WebChat/WebChat.css";

const Slider = () => {
  const { Step } = Steps;
  const { Option } = Select;

  const questions:any[] = [
    {
      id: 1,
      question: "Choose Which DataBase do You Prefer ?",
      type: "options",
      options: [
        "SnowFlake",
        "Amazon Redshift",
        "MongoDB",
        "Azure SQL Database",
      ],
    },
    {
      id: 2,
      question: "Enter Your snowflake account",
      type: "input",
      inputPlaceholder: "Enter your snowflake account",
    },
    {
      id: 3,
      question: "Enter Your snowflake database",
      type: "input",
      inputPlaceholder: "Enter snowflake database",
    },
    {
      id: 4,
      question: "Enter Your snowflake user",
      type: "input",
      inputPlaceholder: "Enter snowflake user",
    },
    {
      id: 5,
      question: "Enter Your snowflake password",
      type: "input",
      inputPlaceholder: "Enter snowflake password",
    },
    {
      id: 6,
      question: "Enter Your snowflake schema",
      type: "input",
      inputPlaceholder: "Enter snowflake schema",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, SetLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill("")
  );
  const navigate = useNavigate();

  const handleAnswerSelection = (selectedAnswer:any) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(updatedAnswers);
  };

  const handleInputAnswerChange = (e:any) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = e.target.value;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = async () => {
    if (currentQuestion === questions.length - 1) {
      const apiData = {
        snowflake_account: userAnswers[1],
        snowflake_database: userAnswers[2],
        snowflake_user: userAnswers[3],
        snowflake_password: userAnswers[4],
        snowflake_schema: userAnswers[5],
      };
      try {
        SetLoading(true);
        const res = await axios.post(
          "http://127.0.0.1:8000/upload/dbCredentials",
          apiData
        );
        if (res.status === 200) {
          SetLoading(false);
          navigate("/cpp/WebChatbot");
        } else {
          message.error("Invalid Credentials");
        }
      } catch (error) {
        console.error("API call failed", error);
        SetLoading(false);
      }
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handleBack = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Steps current={currentQuestion}>
            {questions.map((q, index) => (
              <Step
                key={index}
                title={(userAnswers[index] ? "✓ " : "") + (index + 1)}
              />
            ))}
          </Steps>

          <div className="my-5">
            <h6
              style={{ color: "#204496", fontWeight: 700, fontSize: "20px" }}
              className="my-4"
            >
              {questions[currentQuestion].question}
            </h6>
            {questions[currentQuestion].type === "options" ? (
              <Select
                placeholder="Select an option"
                style={{ width: 300 }}
                onChange={handleAnswerSelection}
                value={userAnswers[currentQuestion]}
              >
                {questions[currentQuestion].options.map((option:any) => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            ) : (
              <Input
                placeholder={questions[currentQuestion].inputPlaceholder}
                style={{ width: 300 }}
                value={userAnswers[currentQuestion]}
                onChange={handleInputAnswerChange}
              />
            )}
          </div>

          <div className="d-flex justify-content-between my-5">
            <Button
              className={currentQuestion === 0 ? "" : "btn-primary"}
              onClick={handleBack}
              disabled={currentQuestion === 0}
            >
              Back
            </Button>

            <Button className="btn-primary" onClick={handleNext}>
              {currentQuestion === questions.length - 1 ? (
                loading ? (
                  <Spin />
                ) : (
                  "Finish"
                )
              ) : (
                "Next"
              )}
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Slider;
