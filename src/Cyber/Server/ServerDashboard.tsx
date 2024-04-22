import React from "react";
import { Row, Col, Card, Progress, Table } from "antd";
import TripleBarChart from "../../components/Charts/TripleBarChart";
import GaugeChart from "../../components/Charts/GaugeChart";
import "./ServerDashboard.css";
import VerticalBar from "../../components/Charts/VerticalBar/VerticalBar";
import { ColumnsType } from "antd/es/table";
const percent1 = 0.55 ;
const percent2= 0.85 ;
const columns:ColumnsType<any> = [
  {
    title: "INITIATIVE",
    dataIndex: "INITIATIVE",
    align: "left",
  },
  {
    title: "STATUS",
    dataIndex: "STATUS",
    align: "center",
  },
  {
    title: "PROGRESS",
    dataIndex: "PROGRESS",
    align: "center",
  },
  {
    title: "COMPLETION DATE",
    dataIndex: "COMPLETIONDATE",
    align: "center",
  },
];
const tripledata1 = {
  argumentField: "name",
  valueField1: "value1",
  valueField2: "value2",
  valueField3: "value3",
  colors: ["#00CE5F", "#FFBD00", "#F74141"],
  data: [
    {
      name: "System 1",
      value1: "120",
      value2: "40",
      value3: "20",
    },
    {
      name: "System 2",
      value1: "280",
      value2: "120",
      value3: "35",
    },
    {
      name: "System 3",
      value1: "220",
      value2: "120",
      value3: "90",
    },
    {
      name: "System 4",
      value1: "200",
      value2: "120",
      value3: "10",
    },
    {
      name: "System 5",
      value1: "189",
      value2: "86",
      value3: "60",
    },
  ],
};
const tripledata2 = {
  argumentField: "name",
  valueField1: "value1",
  valueField2: "value2",
  valueField3: "value3",
  colors: ["#3C89C8", "#EF406A", "#FF9A6C"],
  data: [
    {
      name: "System 1",
      value1: "120",
      value2: "40",
      value3: "20",
    },
    {
      name: "System 2",
      value1: "280",
      value2: "120",
      value3: "35",
    },
    {
      name: "System 3",
      value1: "220",
      value2: "120",
      value3: "90",
    },
    {
      name: "System 4",
      value1: "200",
      value2: "120",
      value3: "100",
    },
    {
      name: "System 5",
      value1: "189",
      value2: "86",
      value3: "60",
    },
  ],
};

const ServerDashboard = () => {
  const Data = [
    {
      INITIATIVE: "Incident Responce",
      STATUS: "Operational",
      PROGRESS: "UP",
      COMPLETIONDATE: "NA",
    },
    {
      INITIATIVE: "Vulnerability Management Program",
      STATUS: "Operational",
      PROGRESS: "DOWN",
      COMPLETIONDATE: "12.06.2023",
    },
    {
      INITIATIVE: "Malicious Activity Detection ",
      STATUS: "On Going",
      PROGRESS: "UP",
      COMPLETIONDATE: "NA",
    },
    {
      INITIATIVE: "Reports and Metrics Elaboration",
      STATUS: "Operational",
      PROGRESS: "DOWN",
      COMPLETIONDATE: "NA",
    },
    {
      INITIATIVE: "Governance",
      STATUS: "On Going",
      PROGRESS: "DOWN",
      COMPLETIONDATE: "NA",
    },
  ];
  return (
    <div className="my-5">
      <h5 className="my-3 fw-bold text-center card-header">Cyber 360 - Server Threats</h5>
      <div className="home-background">
        <Row gutter={22}>
          <Col span={8}>
            <Card className="cybercard-height" >
              {" "}
              <h6 className="cyber-subclass-h">RISK ASSESMENT SCORE</h6>
              <VerticalBar />
            </Card>
          </Col>
          <Col span={8}>
            <Card className="cybercard-height" >
              <h6 className="cyber-subclass-h">OVERALL PROGRESSION</h6>
              <Progress
                type="circle"
                percent={74}
                width={200}
                strokeWidth={15}
                strokeColor="#204496"
                className="d-flex justify-content-center mt-4"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card className="cybercard-height" >
              <h6 className="cyber-subclass-h">CRITICAL RISKS IDENTIFIED</h6>
              <Progress
                type="circle"
                percent={55}
                width={200}
                strokeWidth={15}
                strokeColor="#F74141"
                className="d-flex justify-content-center mt-4"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={22}>
          <Col span={15}>
            <Card className="cybercard-heights mt-4" >
              <h6 className="cyber-subclass-h mb-4">
                CYBER SECURITY INITIATIVES
              </h6>
              <Table pagination={false} columns={columns} dataSource={Data} />
            </Card>
            <Card className="cybercard-heights mt-4" >
              <h6 className="cyber-subclass-h">INCIDENT MANAGEMENT</h6>
              <TripleBarChart item={tripledata1} />
            </Card>
            <Card className="cybercard-heights mt-4" >
              <h6 className="cyber-subclass-h">VULNERABILITIES MANAGEMENT</h6>
              <TripleBarChart item={tripledata2} />
            </Card>
          </Col>
          <Col span={9}>
            <Card
              
              style={{ height: "1335px" }}
              className="mt-4"
            >
              <h6 className="cyber-subclass-h">HIGHLIGHTS</h6>
              <div style={{ textAlign: "justify", padding: "20px" }}>
                <p className="mt-4">
                  <span style={{ fontWeight: "bold" }}>
                    ew device was detected,
                  </span>
                  Lorem ipsum dolor sit amet. Id porro nulla qui dolor
                  consequuntur nam accusantium aliquid! Nam autem repudiandae et
                  fugit amet qui natus dicta At adipisci rerum. Ut suscipit ipsa
                  a impedit quos id adipisci distinctio et repudiandae porro.
                  <br />
                  <br />
                  <p style={{ fontWeight: "bolder" }}>
                    July 14, 2023 - 3:17 Pm
                  </p>
                </p>
                <hr />
                <p className="mt-4">
                  <span style={{ fontWeight: "bold" }}>
                    New hospot device was detected,
                  </span>
                  Lorem ipsum dolor sit amet. Id porro nulla qui dolor
                  consequuntur nam accusantium aliquid! Nam autem repudiandae et
                  fugit amet qui natus dicta At adipisci rerum. Ut suscipit ipsa
                  a impedit quos id adipisci distinctio et repudiandae porro.
                  <br />
                  <br />
                  <p style={{ fontWeight: "bolder" }}>
                    July 14, 2023 - 3:17 Pm
                  </p>
                </p>
                <hr />
                <p className="mt-4">
                  <span style={{ fontWeight: "bold" }}>Active user found,</span>
                  Lorem ipsum dolor sit amet. Id porro nulla qui dolor
                  consequuntur nam accusantium aliquid! Nam autem repudiandae et
                  fugit amet qui natus dicta At adipisci rerum. Ut suscipit ipsa
                  a impedit quos id adipisci distinctio et repudiandae porro.
                  <br />
                  <br />
                  <p style={{ fontWeight: "bolder" }}>
                    July 14, 2023 - 3:17 Pm
                  </p>
                </p>
                <hr />
                <p className="mt-4">
                  <span style={{ fontWeight: "bold" }}>
                    New hospot device was detected,
                  </span>
                  Lorem ipsum dolor sit amet. Id porro nulla qui dolor
                  consequuntur nam accusantium aliquid! Nam autem repudiandae et
                  fugit amet qui natus dicta At adipisci rerum. Ut suscipit ipsa
                  a impedit quos id adipisci distinctio et repudiandae porro.
                  <br />
                  <br />
                  <p style={{ fontWeight: "bolder" }}>
                    July 14, 2023 - 3:17 Pm
                  </p>
                </p>
                <hr />
                <p className="mt-4">
                  <span style={{ fontWeight: "bold" }}>
                    Active device was detected,
                  </span>
                  Lorem ipsum dolor sit amet. Id porro nulla qui dolor
                  consequuntur nam accusantium aliquid! Nam autem repudiandae et
                  fugit amet qui natus dicta At adipisci rerum. Ut suscipit ipsa
                  a impedit quos id adipisci distinctio et repudiandae porro.
                  <br />
                  <br />
                  <p style={{ fontWeight: "bolder" }}>
                    July 14, 2023 - 3:17 Pm
                  </p>
                </p>
                <hr />
                <p className="mt-4">
                  <span style={{ fontWeight: "bold" }}>Active user found,</span>
                  Lorem ipsum dolor sit amet. Id porro nulla qui dolor
                  consequuntur nam accusantium aliquid! Nam autem repudiandae et
                  fugit amet qui natus dicta At adipisci rerum. Ut suscipit ipsa
                  a impedit quos id adipisci distinctio et repudiandae porro.
                  <br />
                  <br />
                  <p style={{ fontWeight: "bolder" }}>
                    July 14, 2023 - 3:17 Pm
                  </p>
                </p>
                <hr />
                <p className="mt-4">
                  <span style={{ fontWeight: "bold" }}>Active user found,</span>
                  Lorem ipsum dolor sit amet. Id porro nulla qui dolor
                  consequuntur nam accusantium aliquid! Nam autem repudiandae et
                  fugit amet qui natus dicta At adipisci rerum. Ut suscipit ipsa
                  a impedit quos id adipisci distinctio et repudiandae porro.
                  <br />
                  <br />
                  <p style={{ fontWeight: "bolder" }}>
                    July 14, 2023 - 3:17 Pm
                  </p>
                </p>
                <hr />
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={22}>
          <Col span={12}>
            <Card className="cybercard-heights mt-4" >
              <h6 className="cyber-subclass-h">COMPLIANCE</h6>
              <GaugeChart percent={percent1} />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="cybercard-heights mt-4" >
              <h6 className="cyber-subclass-h">PATCHES</h6>
              <GaugeChart percent={percent2} />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ServerDashboard;
