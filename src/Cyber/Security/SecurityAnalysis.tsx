import React from "react";
import { Row, Col, Card, Progress } from "antd";
import alert from "../../assets/Cyber/alert.svg";
import roi from "../../assets/Cyber/roi.svg";
import enterprise from "../../assets/Cyber/enterprise.svg";
import consumption from "../../assets/Cyber/consumption.svg";
import background from "../../assets/Cyber/background.svg";
import './SecurityAnalysis.css';
import SecurityPieChart from "../../components/graphs/SecurityPieChart";
import {
  HeatMapComponent,
  Inject,
  Legend,
  Tooltip,
  Adaptor,
  LegendSettings,
} from "@syncfusion/ej2-react-heatmap";
import { registerLicense } from "@syncfusion/ej2-base";
import { CyberDonutChart } from "../../components/graphs/CyberDonutChart";
import { CyberDonutChart1 } from "../../components/graphs/CyberDonutChart1";

const data1 = [
  { name: "Inference", value: 80 },
  { name: "Sponge", value: 100 },
  { name: "Poisoning", value: 70 },
  { name: "Evasion", value: 50 },
  { name: "Extraction", value: 0 },
];
const data2 = [
  { name: "High Risk", value: 30 },
  { name: "Mid Risk", value: 100 },
  { name: "Low Risk", value: 50 },
];
const data3 = [
  { name: "High Risk", value: 30 },
  { name: "Mid Risk", value: 100 },
  { name: "Low Risk", value: 50 },
];

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEZjUH9YcHNRQWJcUUB1Wg=="
);

const palette = [
  { value: 1, color: "#F74141" },
  { value: 2, color: "#FDC934" },
  { value: 3, color: "#00CE5F" },
];

const heatMapDetailsData = {
  data: [
    [1, 2, 2, 3, 3],
    [1, 2, 2, 3, 3],
    [1, 2, 2, 3, 3],
   
  ],
};

const SecurityAnalysis = () => {
  return (
    <div className="my-5">
      <h5 className="my-3 fw-bold text-center card-header">Cyber 360 - SecurityAnalysis</h5>
      <div className="home-background">
        <Row gutter={32}>
          <Col span={6}>
            <Card className="cybercard-height" bordered={false}>
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
                  <h6
                    style={{
                      color: "#204496",
                      fontWeight: "600",
                      marginTop: "25px",
                    }}
                  >
                    Risks
                  </h6>
                </Col>
              </Row>
              <div className="cyber-box2 d-flex justify-content-center align-items-center mt-3">
                <div className="cyber-h">
                  {" "}
                  <h1>30.3% </h1>{" "}
                </div>
              </div>
              <p
                style={{
                  fontWeight: "400",
                  marginTop: "-40px",
                  marginLeft: "130px",
                }}
              >
                {" "}
                Reduced
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="cybercard-height" bordered={false}>
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
                      src={roi}
                      alt={roi}
                      style={{ width: "70%", margin: "10px" }}
                    />
                  </div>
                </Col>
                <Col>
                  <h6
                    style={{
                      color: "#204496",
                      fontWeight: "600",
                      marginTop: "25px",
                    }}
                  >
                    ROI
                  </h6>
                </Col>
              </Row>
              <div className="cyber-box2 d-flex justify-content-center align-items-center mt-3">
                <h1 className="cyber-h">170</h1>
              </div>
              <p
                style={{
                  fontWeight: "400",
                  marginTop: "-40px",
                  marginLeft: "115px",
                }}
              >
                {" "}
                Hours Saved
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="cybercard-height" bordered={false}>
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
                      src={enterprise}
                      alt={enterprise}
                      style={{ width: "80%", margin: "10px" }}
                    />
                  </div>
                </Col>
                <Col>
                  <h6
                    style={{
                      color: "#204496",
                      fontWeight: "600",
                      marginTop: "25px",
                    }}
                  >
                    ENTERPRICE
                  </h6>
                </Col>
              </Row>
              <div className="cyber-box2 d-flex justify-content-center align-items-center mt-3">
                <h1 className="cyber-h">5</h1>
              </div>
              <p
                style={{
                  fontWeight: "400",
                  marginTop: "-40px",
                  marginLeft: "107px",
                }}
              >
                Requires Attention
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="cybercard-height" bordered={false}>
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
                      src={consumption}
                      alt={consumption}
                      style={{ width: "80%", margin: "10px" }}
                    />
                  </div>
                </Col>
                <Col>
                  <h6
                    style={{
                      color: "#204496",
                      fontWeight: "600",
                      marginTop: "25px",
                    }}
                  >
                    CONSUMPTION
                  </h6>
                </Col>
              </Row>
              <div className="cyber-box2 d-flex justify-content-center align-items-center mt-3">
                <h1 className="cyber-h">48.7%</h1>
              </div>
              <p
                style={{
                  fontWeight: "400",
                  marginTop: "-40px",
                  marginLeft: "115px",
                }}
              >
                Consumed
              </p>
            </Card>
          </Col>
        </Row>

        <Row gutter={200}>
          <Col span={3}>
            <Card
              className="cybercard360-height"
              bordered={false}
              style={{ width: "200px" }}
            >
              <Row gutter={[24, 24]}>
                <Col span={8}>
                  <h6 className="small-card-text" style={{ width: "150px" }}>
                    Number of Vulnerabilities Detected
                  </h6>
                </Col>
                <Col span={8}>
                  <img
                    src={background}
                    alt={background}
                    style={{ height: "45px", marginLeft: "60px" }}
                  />
                  <div className="background-text">70</div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={3}>
            <Card
              className="cybercard360-height"
              bordered={false}
              style={{ width: "200px" }}
            >
              <Row gutter={[24, 24]}>
                <Col span={8}>
                  <h6 className="small-card-text" style={{ width: "150px" }}>
                    Number of Defence Generated
                  </h6>
                </Col>
                <Col span={8}>
                  <img
                    src={background}
                    alt={background}
                    style={{ height: "45px", marginLeft: "60px" }}
                  />
                  <div className="background-text">50</div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={3}>
            <Card
              className="cybercard360-height"
              bordered={false}
              style={{ width: "200px" }}
            >
              <Row gutter={[24, 24]}>
                <Col span={8}>
                  <h6 className="small-card-text" style={{ width: "150px" }}>
                    Number of Hours Saved
                  </h6>
                </Col>
                <Col span={8}>
                  <img
                    src={background}
                    alt={background}
                    style={{ height: "45px", marginLeft: "60px" }}
                  />
                  <div className="background-text">30</div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={3}>
            <Card
              className="cybercard360-height"
              bordered={false}
              style={{ width: "200px" }}
            >
              <Row gutter={[24, 24]}>
                <Col span={8}>
                  <h6 className="small-card-text" style={{ width: "100px" }}>
                    Number of Threats Rectified
                  </h6>
                </Col>
                <Col span={8}>
                  <img
                    src={background}
                    alt={background}
                    style={{ height: "45px", marginLeft: "60px" }}
                  />
                  <div className="background-text">33</div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={3}>
            <Card
              className="cybercard360-height"
              bordered={false}
              style={{ width: "200px" }}
            >
              <Row gutter={[24, 24]}>
                <Col span={8}>
                  <h6 className="small-card-text" style={{ width: "150px" }}>
                    Active Threats per Day
                  </h6>
                </Col>
                <Col span={8}>
                  <img
                    src={background}
                    alt={background}
                    style={{ height: "45px", marginLeft: "60px" }}
                  />
                  <div className="background-text">56</div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={3}>
            <Card
              className="cybercard360-height"
              bordered={false}
              style={{ width: "200px" }}
            >
              <Row gutter={[24, 24]}>
                <Col span={8}>
                  <h6 className="small-card-text" style={{ width: "150px" }}>
                    Number of Risks
                  </h6>
                </Col>
                <Col span={8}>
                  <img
                    src={background}
                    alt={background}
                    style={{ height: "45px", marginLeft: "60px" }}
                  />
                  <div className="background-text">47</div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={3}>
            <Card
              className="cybercard360-height"
              bordered={false}
              style={{ width: "200px" }}
            >
              <Row gutter={[24, 24]}>
                <Col span={8}>
                  <h6 className="small-card-text" style={{ width: "150px" }}>
                    Active Threats per Day
                  </h6>
                </Col>
                <Col span={8}>
                  <img
                    src={background}
                    alt={background}
                    style={{ height: "45px", marginLeft: "60px" }}
                  />
                  <div className="background-text">50</div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row gutter={32}>
          <Col span={8}>
            <Card className="cybercard-heights mt-4" bordered={false}>
              <h6 className="cyber-subclass-h">SECURITY VULNERABILITIES</h6>
              <SecurityPieChart data={data1} />
            </Card>
          </Col>

          <Col span={16}>
            <Row gutter={16}>
              <Col span={24}>
                <Card className="cybercard-heights mt-4" bordered={false}>
                  <h6 className="cyber-subclass-h">
                    CONSOLIDATED RISK POSTURE{" "}
                  </h6>
                  <Row gutter={16}>
                    <Col span={12}>
                      <p
                        style={{
                          marginLeft: "200px",
                          marginTop: "30px",
                          color: "#BDBDBD",
                          fontWeight:"bolder",
                        }}
                      >
                        Yesterday
                      </p>
                      <CyberDonutChart data={data2} />
                    </Col>
                    <Col span={12}>
                      <p
                        style={{
                          marginLeft: "210px",
                          marginTop: "10px",
                          color: "#204496",
                          fontWeight:"bolder",
                        }}
                      >
                        Today
                      </p>
                      <CyberDonutChart1 data={data3} />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={22}>
          <Col span={15}>
            <Card
              bordered={false}
              style={{ height: "1000px", marginBottom: "16px" }}
              className="mt-4"
            >
              <h6 className="cyber-subclass-h">CONSOLIDATED RISK POSTURE</h6>

              <HeatMapComponent
                style={{ 
                  marginTop: "50px",
                 
                  }}
                id="heatmap"
                // titleSettings={{
                //   textAlignment: "left",
                // }}
                yAxis={{
                  labels: [
                    "Inference",
                    "Extraction",
                    "Evasion",
                    "Poisoning",
                    "Sponge",
                  ],
                }}
                dataSource={heatMapDetailsData.data}
                paletteSettings={{
                  palette: palette,
                }}
               
              >
                <Inject services={[Legend ,Tooltip, Adaptor]} />
              
               
             
              </HeatMapComponent>
              <div
                style={{
                  marginTop: "30px",
                  position: "absolute",
                  marginLeft: "350px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#F74141",
                    marginRight: "10px",
                  }}
                ></div>
                <span>High 70-100</span>

                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#FDC934",
                    margin: "0 10px",
                  }}
                ></div>
                <span>Mid 30-70</span>

                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#00CE5F",
                    margin: "0 10px",
                  }}
                ></div>
                <span>Low 0-30</span>
              </div>
            </Card>
          </Col>
          <Col span={9}>
            <Card
              bordered={false}
              style={{ height: "1000px" }}
              className="mt-4"
            >
              <h6 className="cyber-subclass-h">HIGHLIGHTS</h6>
              <div style={{ textAlign: "justify", padding: "20px" }}>
                <p className="mt-4">
                  <span style={{ fontWeight: "bold" }}>
                    New device was detected,
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
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SecurityAnalysis;
