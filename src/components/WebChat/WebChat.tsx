import React from "react";
import { Row, Col } from "antd";
import ChatImage from "../../assets/Assistance.jpg";
import Slider from "./Slider";

const WebChat = () => {
  return (
    <Row
      justify="space-between"
      align="middle"
      style={{ height: "100vh", background: "#fff" }}
    >
      <Col span={2}></Col>
      <Col span={8}>
        <img
          src={ChatImage}
          alt="Chat"
          style={{ width: "100%", margin: "auto" }}
        />
      </Col>
      <Col span={8}>
        <Slider />
      </Col>
      <Col span={2}></Col>
    </Row>
  );
};

export default WebChat;
