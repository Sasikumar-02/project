import React from "react";
import { Row, Col, Card, Progress } from "antd";
import alert from "../../assets/Cyber/alert.svg";
import "./FileSystemDashboard.css";
import { DonutChart } from "../../components/graphs/donutChart";

const subclasses = [
  {
    name: "Toolbar",
    rate: 50,
  },
  {
    name: "Adware",
    rate: 45,
  },
  {
    name: "Spyware",
    rate: 60,
  },
  {
    name: "Keygen",
    rate: 80,
  },
  {
    name: "Threat 6",
    rate: 40,
  },
  {
    name: "Threat 7",
    rate: 65,
  },
  {
    name: "Threat 8",
    rate: 45,
  },
  {
    name: "Threat 9",
    rate: 50,
  },
  {
    name: "Threat 10",
    rate: 35,
  },
];
const data0 = [
  {
    name: "Allowed Files",
    value: 6500,
  },
  { name: "Restricted Files", value: 4500 },
];
const FileSystemDashboard = () => {
  return (
    <div className="my-5">
      <h5 className="my-3 fw-bold text-center card-header">Cyber 360 - FileSystem Threats</h5>
      <div className="home-background">
        <Row gutter={32}>
          <Col span={14}>
            <Row gutter={32}>
              <Col span={12}>
                <Card className="cybercard-height" >
                  <Row gutter={22} justify={"center"}>
                    <Col>
                      <div
                        style={{
                          borderRadius: "20%",
                          width: "70px",
                          height: "70px",
                          background: "#FFEFED",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <img
                          src={alert}
                          alt={alert}
                          style={{ width: "50%", margin: "15px" }}
                        />
                      </div>
                    </Col>
                    <Col>
                      <h6 style={{ color: "#204496", fontWeight: "600" }}>
                        Active Threads
                      </h6>
                      <p style={{ fontWeight: "400", marginTop: "20px" }}>
                        You have active risks
                      </p>
                    </Col>
                  </Row>
                  <div className="cyber-box d-flex justify-content-center align-items-center mt-3">
                    <h1 className="cyber-h">11110</h1>
                  </div>
                </Card>
              </Col>
              <Col span={12}>
                <Card className="cybercard-height" >
                  <Row gutter={22} justify={"center"}>
                    <Col>
                      <div
                        style={{
                          borderRadius: "20%",
                          width: "70px",
                          height: "70px",
                          background: "#FFEFED",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <img
                          src={alert}
                          alt={alert}
                          style={{ width: "50%", margin: "15px" }}
                        />
                      </div>
                    </Col>
                    <Col>
                      <h6 style={{ color: "#204496", fontWeight: "600" }}>
                        Active Threads
                      </h6>
                      <p style={{ fontWeight: "400", marginTop: "20px" }}>
                        You have active risks
                      </p>
                    </Col>
                  </Row>
                  <div className="cyber-box d-flex justify-content-center align-items-center mt-3">
                    <h1 className="cyber-h">1.880</h1>
                  </div>
                </Card>
              </Col>
            </Row>
            <div className="mt-4">
              <Card className="cybercard-heights" >
                <h6 className="cyber-subclass-h">THREAT DETECTION</h6>
                <DonutChart data={data0} />
              </Card>
            </div>
          </Col>
          <Col span={10}>
            <Card  style={{height:'750px'}}>
              <h6 className="cyber-subclass-h mb-5">Top 10 Threats By Subclass</h6>
              {subclasses.map((item) => (
                <Row>
                  <Col span={10}>
                    <p className="cyber-subclass-p mb-5">{item.name}</p>
                  </Col>
                  <Col span={14}>
                    <Progress
                      className="mb-5"
                      percent={item.rate}
                      size={[300, 20]}
                      strokeColor={item.rate < 50 ? "#F74141" : "#204496"}
                    />
                  </Col>
                </Row>
              ))}
            </Card>
          </Col>
        </Row>
        <Row gutter={32} className="mt-4">
          <Col span={12}>
            <Card  className="cybercard-heights">
              <h6 className="cyber-subclass-h">RISK & COMPLIANCE</h6>
              <Row justify={"space-between"} className="mt-5">
                <Col>
                  <Progress
                    type="circle"
                    percent={74}
                    width={200}
                    strokeWidth={15}
                    strokeColor="#F79387"
                  />
                  <p
                    style={{
                      textAlign: "center",
                      color: "#346280",
                      fontWeight: "400",
                      marginTop: "10px",
                    }}
                  >
                    Supported OS Compliance
                  </p>
                </Col>
                <Col>
                  <Progress
                    type="circle"
                    percent={52}
                    width={200}
                    strokeWidth={15}
                    strokeColor="#52D879"
                  />
                  <p
                    style={{
                      textAlign: "center",
                      color: "#346280",
                      fontWeight: "400",
                      marginTop: "10px",
                    }}
                  >
                    Services Compliance
                  </p>
                </Col>
                <Col>
                  <Progress
                    type="circle"
                    percent={25}
                    width={200}
                    strokeWidth={15}
                    strokeColor="#FFBD00"
                  />
                  <p
                    style={{
                      textAlign: "center",
                      color: "#346280",
                      fontWeight: "400",
                      marginTop: "10px",
                    }}
                  >
                    Installed Software Compliance
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card  className="cybercard-heights">
              <h6 className="cyber-subclass-h">SOFTWARE PATCH & AV</h6>
              <Row justify={"space-between"} className="mt-5">
                <Col>
                  <Progress
                    type="circle"
                    percent={55}
                    width={200}
                    strokeWidth={15}
                    strokeColor="#FFBD00"
                  />
                  <p
                    style={{
                      textAlign: "center",
                      color: "#346280",
                      fontWeight: "400",
                      marginTop: "10px",
                    }}
                  >
                    AV Definitions Current
                  </p>
                </Col>
                <Col>
                  <Progress
                    type="circle"
                    percent={72}
                    width={200}
                    strokeWidth={15}
                    strokeColor="#F79387"
                  />
                  <p
                    style={{
                      textAlign: "center",
                      color: "#346280",
                      fontWeight: "400",
                      marginTop: "10px",
                    }}
                  >
                    AV Service Running
                  </p>
                </Col>
                <Col>
                  <Progress
                    type="circle"
                    percent={35}
                    width={200}
                    strokeWidth={15}
                    strokeColor="#52D879"
                  />
                  <p
                    style={{
                      textAlign: "center",
                      color: "#346280",
                      fontWeight: "400",
                      marginTop: "10px",
                    }}
                  >
                    OS Patches Within Policy
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FileSystemDashboard;
