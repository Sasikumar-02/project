import React from "react";
import SelectBox from "devextreme-react/select-box";
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
  Title,
  Subtitle,
  Tooltip,
  Grid,
  Crosshair,
  Label,
  HorizontalLine,
} from "devextreme-react/chart";
import { Radio } from "antd";
const types = ["line", "stackedline", "fullstackedline"];

const LinedChart = ({
  link,
  customText,
  key,
  item,
  handleRemoveItem,
  handleActiveChart,
  modalShow,
}) => {
  let type = "line";

  function handleChange(e) {
    // this.setState({ type: e.value });
  }

  const dataSource = [
    {
      country: "China",
      y014: 233866959,
    },
    {
      country: "India",
      y014: 373419115,
    },
    {
      country: "United States",
      y014: 60554755,
    },
    {
      country: "Indonesia",
      y014: 65715705,
    },
    {
      country: "Brazil",
      y014: 45278034,
    },
    {
      country: "Russia",
      y014: 24465156,
    },
  ];

  return (
    <div className="row tt">
      <div className="col-lg-12">
        <div className=" mb-3 d-flex align-items-center justify-content-between">
          <h5 className="my-3 graph-title d-flex flex-column ">
            <b className="text-primary-blue">
              {item ? item?.title.toLowerCase() : "Time Spent"}
            </b>
            <b>
              {item?.subtitle?.toLowerCase()
                ? item?.subtitle?.toLowerCase() + " : " + item?.value
                : "Avg Time Spent : " + item?.value}
            </b>
          </h5>
          <Radio.Group
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
          </Radio.Group>
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
        <div className="py-2 pb-4">
          <React.Fragment>
            <div id="chart-demo">
              <Chart dataSource={item?.data}>
                <CommonSeriesSettings
                color="rgba(32, 68, 150, 1)"
                  argumentField="country"
                  // valueField="users"
                  type="line"
                />
                <Series
                  argumentField={item?.argumentField}
                  valueField={item?.valueField}
                  point={{
                    size: 8,
                    hoverStyle: {
                      size: 10,
                    },
                    visible: true,
                  }}
                ></Series>

                <Crosshair
                  enabled={true}
                  color="rgba(138, 144, 153, 1)"
                  width={1}
                  dashStyle="Dash"
                >
                  <HorizontalLine visible={false} />
                  <Label visible={true} />
                </Crosshair>
                <ArgumentAxis valueMarginsEnabled={false} />
                <Margin bottom={20} right={20} left={20} />
                <Tooltip enabled={true} />
                <Legend visible={false} />
              </Chart>
            </div>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export default LinedChart;
