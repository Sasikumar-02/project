import React from "react";
import { setCustomer, setSubscriber } from "../../redux/Actions";
import { Radio } from "antd";

import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Legend,
  Animation,
} from "devextreme-react/pie-chart";

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

const PieGraph = ({
  link,
  customText,
  key,
  item,
  handleRemoveItem,
  handleActiveChart,
  modalShow,
}) => {
  function customizeText(arg) {
    return `${arg.argument} (${arg.percentText})`;
    // return `${arg.argument}`;
  }

  const onPointClick = ({ target: point }) => {
    point.select();
  };
  

  return (
    <>
      <div className="row tt">
        <div className="col-lg-12">
          <div className=" mb-3 d-flex align-items-center justify-content-between">
            <h5 className="my-3 graph-title d-flex flex-column ">
              <b className="text-primary-blue">
                {item ? item?.title.toLowerCase() : "Time Spent"}
              </b>
              <b>
                {item
                  ? item?.subtitle.toLowerCase() + " : " + item?.value
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
            <PieChart
              id="pie"
              dataSource={item?.data}
              palette={customColors}
              title=""
              type="doughnut"
              innerRadius={1.2}
              // onPointClick={pointClickHandler}
              // onLegendClick={legendClickHandler}
              hoverMode="allArgumentPoints"
              onPointClick={onPointClick}
              resolveLabelOverlapping={resolveModes[2]}
            >
              <Series
                argumentField="argument" //{item?.argumentField}
                valueField="value" //{item?.valueField}
                border={{
                  visible: true,
                  width: 2,
                  color: "white", // Set the desired border color
                }}
              >
                <Label
                  length={100}
                  visible={true}
                  position="outside"
                  customizeText={customizeText}
                >
                  <Connector visible={true} length={300} />
                </Label>
              </Series>
              <Legend
                visible={true}
                margin={2}
                horizontalAlignment="right"
                // verticalAlignment="top"
                verticalAlignment="top"
              />
              <Size width={"100%"} height={250} />
              <Animation enabled={false} />

              {/* <Export enabled={true} /> */}
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default PieGraph;
