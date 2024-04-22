import React from "react";
import { Row, Col, Card, Progress } from "antd";
import alert from "../../assets/Cyber/alert.svg";
import "./RiskDashboard.css";
import CyberPieChart from "../../components/graphs/CyberPieChart";
import { HeatMapComponent, Inject, Legend, Tooltip, Adaptor } from '@syncfusion/ej2-react-heatmap';
import { registerLicense } from "@syncfusion/ej2-base";

const data1 = [
  { name: "Critical", value: 100 },
  { name: "High", value: 80 },
  { name: "Medium", value: 50 },
  { name: "low", value: 30 },
];
const data2 = [
  { name: "planner", value: 100 },
  { name: "Implemented", value: 50 },
  { name: "Deffered", value: 30 },
  { name: "TBD", value: 20 },
];

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEZjUH9YcHNRQWJcUUB1Wg=="
);
const subclasses1 = [
  {
    name: "Encryption Vulnerabilities",
    rate: 50,
  },
  {
    name: "Excessive User Permissions ",
    rate: 45,
  },
  {
    name: "Dormant Accounts",
    rate: 60,
  },
  {
    name: "Physical security",
    rate: 80,
  },
  {
    name: "Overlay Trusting Employees",
    rate: 40,
  },
];
const subclasses2 = [
  {
    name: "General Hospitals",
    rate: 50,
  },
  {
    name: "Internal Medicine East",
    rate: 45,
  },
  {
    name: "Vascular care",
    rate: 60,
  },
  {
    name: "Medical Center",
    rate: 80,
  },
  {
    name: "Internal Medicine-Davidson",
    rate: 40,
  },
];

const heatMapDetailsData = {
  title: "Risk HeatMap",
  data: [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [22, 32, 42, 52],
    [28, 38, 48, 58],
    [33, 43, 53, 63],
    [40, 50, 60, 70],
  ],
};
const RiskDashboard = () => {
  const palette = [
    { value: 30, color: '#8ED2FF' },
    { value: 50, color: '#93D0F8' },
    { value: 100, color: '#E0F3FF' },
  ]
  return (
    <div className="my-5">
      <h5 className="my-3 fw-bold text-center card-header">Cyber 360 - Risk Analysis</h5>
      <div className="home-background">
        <Row gutter={32}>
          <Col span={6}>
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
                    Risk %
                  </h6>
                  <p style={{ fontWeight: "400", marginTop: "20px" }}>
                    You have active risks
                  </p>
                </Col>
              </Row>
              <div className="cyber-box2 d-flex justify-content-center align-items-center mt-3">
                <h1 className="cyber-h">35%</h1>
              </div>
            </Card>
          </Col>
          <Col span={6}>
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
                    Number of Risks
                  </h6>
                  <p style={{ fontWeight: "400", marginTop: "20px" }}>
                    You have active risks
                  </p>
                </Col>
              </Row>
              <div className="cyber-box2 d-flex justify-content-center align-items-center mt-3">
                <h1 className="cyber-h">355</h1>
              </div>
            </Card>
          </Col>
          <Col span={6}>
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
                    Risk Analysis progress
                  </h6>
                  <p style={{ fontWeight: "400", marginTop: "20px" }}>
                    You have active risks
                  </p>
                </Col>
              </Row>
              <div className="cyber-box2 d-flex justify-content-center align-items-center mt-3">
                <h1 className="cyber-h">37%</h1>
              </div>
            </Card>
          </Col>
          <Col span={6}>
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
                    Response Progress
                  </h6>
                  <p style={{ fontWeight: "400", marginTop: "20px" }}>
                    You have active risks
                  </p>
                </Col>
              </Row>
              <div className="cyber-box2 d-flex justify-content-center align-items-center mt-3">
                <h1 className="cyber-h">67%</h1>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={12}>
            <Card className="cybercard-heights mt-4" >
              <h6 className="cyber-subclass-h">CRITICAL RISKS IDENTIFIED</h6>
              <CyberPieChart data={data1} />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="cybercard-heights mt-4" >
              <h6 className="cyber-subclass-h">ACTION PLAN BREAKDOWN</h6>
              <CyberPieChart data={data2} />
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col span={24}>
            <Card className="cybercard-height mt-4" >
              <h6 className="cyber-subclass-h">RISK heat map</h6>
              <HeatMapComponent
                id="heatmap-container"
                titleSettings={{
                  textStyle: {
                    size: "25px",
                    fontWeight: "600",
                    color: "#E0F3FF",
                    fontStyle: "Normal",
                    fontFamily: "Segoe UI",
                    textAlignment: "Near",
                  },
                }}
                xAxis={{
                  labels: [
                    "SEVERE",
                    "MAJOR",
                    "MODERATE",
                    "Thu",
                    "MINOR",
                    "INSIGNIFICANT",
                  ],
                }}
                yAxis={{
                  labels: [
                    "RARE",
                    "UNLIKELY",
                    "MODERATE",
                    "LIKELY",
                    "ALMOST CERTAIN",
                  ],
                }}
                dataSource={heatMapDetailsData.data}
                paletteSettings={{ palette, type: 'Gradient' }}
                height="250"
                width="1350"

              >
                <Inject services={[Legend, Tooltip, Adaptor]} />
              </HeatMapComponent>
            </Card>
          </Col>
        </Row>
        <Row gutter={32} className="mt-4">
          <Col span={12}>
            <Card >
              <h6 className="cyber-subclass-h">Top 5 vulnerabilities</h6>
              {subclasses1.map((item) => (
                <Row gutter={32}>
                  <Col span={10}>
                    <p className="cyber-subclass-p mt-5 d-flex justify-content-end">
                      {item.name}
                    </p>
                  </Col>
                  <Col span={14}>
                    <Progress
                      className="mt-5"
                      percent={item.rate}
                      size={[300, 20]}
                      strokeColor={"#449BD5"}
                    />
                  </Col>
                </Row>
              ))}
            </Card>
          </Col>
          <Col span={12}>
            <Card >
              <h6 className="cyber-subclass-h">TOP 5 entities</h6>
              {subclasses2.map((item) => (
                <Row gutter={32}>
                  <Col span={10}>
                    <p className="cyber-subclass-p mt-5 d-flex justify-content-end">
                      {item.name}
                    </p>
                  </Col>
                  <Col span={14}>
                    <Progress
                      className="mt-5"
                      percent={item.rate}
                      size={[300, 20]}
                      strokeColor={"#9747FF"}
                    />
                  </Col>
                </Row>
              ))}
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RiskDashboard;
