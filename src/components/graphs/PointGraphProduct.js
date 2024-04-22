import React, { useState } from "react";
import { Radio } from "antd";

import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Margin,
  Export,
  Legend,
  Tooltip,
  Crosshair,
  Label,
  HorizontalLine,
  CommonAxisSettings,
  Pane,
  ValueAxis,
  Point,
  Grid,
  ConstantLine,
  Tick,
  Annotation,
} from "devextreme-react/chart";

const resolveModes = ["shift", "hide", "none"];

// COLORS add colors if need more data sections
const customColors = [
  "#204496",
  "#449BD5",
  "#6B7A99",
  "#505F7B",
  "#EA4648",
  "#4359AA",
  "#00517C",
  "#BEC6DA",
];

const PointChartProduct = ({
  link,
  customText,
  key,
  item,
  handleRemoveItem,
  handleActiveChart,
  modalShow,
}) => {
  const crosshairFormat = {
    type: "fixedPoint",
    precision: 2,
  };
  const types = ["splinearea", "stackedsplinearea", "fullstackedsplinearea"];
  const data = [
    { impact: 1, performance: 3 }, // Quadrant I
    { impact: 2, performance: 2 }, // Quadrant II
    { impact: -1, performance: -1 }, // Quadrant III
    { impact: -2, performance: -3 }, // Quadrant IV
    { impact: -1, performance: 2 },
    { impact: 1, performance: -3 },
    { impact: 1, performance: -2 },
  ];
  const quadrantLabels = ["Highly Used", "Emerging", "Declining", "Unused"];

  const constantLineLabelAboveZeroLeft = "Above 0 (Left)";
  const constantLineLabelAboveZeroRight = "Above 0 (Right)";
  const constantLineLabelBelowZeroLeft = "Below 0 (Left)";
  const constantLineLabelBelowZeroRight = "Below 0 (Right)";
  return (
    <>
      <div className="row tt">
        <div className="col-lg-12">
          <div className=" mb-3 d-flex align-items-center justify-content-between">
          <h5 className="fw-bold text-primary-blue ">
              {item ? item?.title : "Time Spent"}
            </h5>
            {/* <Radio.Group
              style={{
                marginBottom: 16,
              }}
            >
              <Radio.Button
                style={{
                  borderTopLeftRadius: "50px",
                  borderBottomLeftRadius: "50px",
                }}
                value="Daily"
              >
                Daily
              </Radio.Button>
              <Radio.Button value="Weekly">Weekly</Radio.Button>
              <Radio.Button
                style={{
                  borderTopRightRadius: "50px",
                  borderBottomRightRadius: "50px",
                }}
                value="Monthly"
              >
                Monthly
              </Radio.Button>
            </Radio.Group> */}
            {/* {!modalShow && (
							<div>
								<img
									src="/assets/img/zoom.svg"
									onClick={() => handleActiveChart(item)}
									// className="me-3"
									alt=""
								/>
								<img
									src="/assets/img/close.svg"
									onClick={() => handleRemoveItem(key)}
									alt=""
								/>
							</div>
						)} */}
          </div>
          <div className="py-2 pb-4 text-danger ">
            <div className="d-flex justify-content-around mb-1 ">
              <h6>High Revenue</h6>
              <h6>High Expense</h6>
            </div>
            <React.Fragment >
              <div id="chart-demo">
                <Chart id="chart" dataSource={item?.data} palette="Material" height={item?.height  ? item?.height : 400}>
                  <CommonSeriesSettings type="scatter" />
                  <Series argumentField="impact" valueField="performance">
                    <Point symbol="circle" color="#204496" />
                    <Label // Add Label component for annotations
                      visible={true}
                      font={{ color: "grey" }}
                      backgroundColor="none"
                      position="outside"
                      customizeText={(pointInfo) => `Campaign Test`}
                      horizontalOffset={10}
                      verticalOffset={0}
                    />
                  </Series>

                  <ArgumentAxis visible={false}>
                    <ConstantLine
                      value={0}
                      width={1}
                      color="#204496"
                      dashStyle={"Dash"}
                    >
                    </ConstantLine>
                  </ArgumentAxis>
                  <ValueAxis visible={false}>
                    <ConstantLine
                      value={0}
                      width={1}
                      color="#204496"
                      dashStyle={"Dash"}
                    >
                    </ConstantLine>
                  </ValueAxis>
                  <Legend visible={false} />
                  <CommonAxisSettings>
                    <Grid visible={true} /> {/* Hide grid lines */}
                    <Tick visible={false} /> {/* Hide tick marks */}
                    <Label visible={false} /> {/*Hide axis labels */}
                  </CommonAxisSettings>
                </Chart>
              </div>
            </React.Fragment>
              <div className="d-flex justify-content-around text-danger mt-1">
              <h6>Low Expense</h6>
              <h6>Low Revenue</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PointChartProduct;
