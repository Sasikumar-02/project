import React from "react";
import { Button, Drawer, Radio } from "antd";

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
} from "devextreme-react/chart";
import { useState } from "react";
import { RobotOutlined } from "@ant-design/icons";

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

const 


LinedChartProduct = ({
  link,
  customText,
  key,
  item,
  handleRemoveItem,
  handleActiveChart,
  modalShow,
  selectedValue,
  onSelectedValueChange,
}) => {
  const crosshairFormat = {
    type: "fixedPoint",
    precision: 2,
  };

  const types = ["splinearea", "stackedarea", "fullstackedsplinearea"];
 

  const [internalSelectedValue, setInternalSelectedValue] =
    useState(selectedValue);
  const handleRadioChange = (e) => {
    const newValue = e.target.value;
    setInternalSelectedValue(newValue);
    onSelectedValueChange(newValue);
  };
  const [visible, setVisible] = useState(false);


  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="row tt">
        <div className="col-lg-12">
          <div className=" mb-3 gap-2  d-flex align-items-center justify-content-between">
            <h5 className="fw-bold text-primary-blue ">
              {item ? item?.title : "Time Spent"}
            </h5>
            {item.radio != "no" && (
              <Radio.Group
                value={selectedValue}
             
                onChange={handleRadioChange}
              >
                <Radio.Button
                  style={{
                    borderTopLeftRadius: "50px",
                    borderBottomLeftRadius: "50px",
                  }}
                  value="daily"
                >
                  Daily
                </Radio.Button>
                <Radio.Button value="weekly">Weekly</Radio.Button>
                <Radio.Button
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                  value="monthly"
                >
                  Monthly
                </Radio.Button>
              </Radio.Group>
            )}
          </div>
          <div className="py-2 pb-4">
            <React.Fragment>
              <div id="chart-demo">
                {item && item?.data && (
                  <Chart palette={customColors} dataSource={item?.data} height={item?.height ? item.height : 400 }>
                    <ValueAxis name="absoluteAxis" />
                    <ValueAxis name="hoursAxis" position="right" />
                    <CommonSeriesSettings
                      argumentField="company"
                      type={types[0]}
                    />
                    <Series
                      argumentField={item?.argumentField}
                      valueField={item?.valueField1}
                      name={item?.valueField1}
                      axis="absoluteAxis"
                      Series={item}
                      point={{
                        size: 0,
                        hoverStyle: {
                          size: 10,
                        },
                        visible: true,
                      }}
                    >
                      <Tooltip enabled={true} />
                    </Series>
                    <Series
                      argumentField={item?.argumentField}
                      valueField={item?.valueField2}
                      name={item?.valueField2}
                      axis="hoursAxis"
                      point={{
                        size: 0,
                        hoverStyle: {
                          size: 10,
                        },
                        visible: true,
                      }}
                    >
                      <Tooltip enabled={true} />
                    </Series>

                    <Crosshair
                      enabled={true}
                      color="rgba(138, 144, 153, 1)"
                      width={1}
                      dashStyle="Dash"
                    >
                      <HorizontalLine visible={false} />
                      <Label visible={true} format={crosshairFormat} />
                    </Crosshair>
                    <ArgumentAxis valueMarginsEnabled={false} />
                    {/* <Margin bottom={20} right={20} left={20} /> */}
                    <Tooltip enabled={true} shared={true} />
                    <Legend
                      visible={true}
                      position="outside"
                      horizontalAlignment="center"
                      verticalAlignment="bottom"
                    />
                  </Chart>
                )}
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default LinedChartProduct;
