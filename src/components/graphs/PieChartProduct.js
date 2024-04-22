import React from "react";
import { Radio } from "antd";

import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Legend,
  Animation,
  Tooltip,
  Format,
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

const PieChartProduct = ({
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
  const customizeTooltip = (arg) => {
    return {
      text: `${arg.argument} - ${(arg.percent * 100).toFixed(2)}%`,
    };
  };

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
          <div  className="pt-2">
            <PieChart
              id="pie"
              dataSource={item?.data}
              palette={customColors}
              title=""
              type="doughnut"
              height={item?.height ? item.height : "auto"}
              innerRadius={0.8}
              hoverMode="allArgumentPoints"
              onPointClick={onPointClick}
              resolveLabelOverlapping={resolveModes[1]}
            >
              <Series
                argumentField={item?.argumentField}
                valueField={item?.valueField}
                border={{
                  visible: true,
                  width: 2,
                  color: "white", 
                }}
              >
              </Series>
              <Legend
                visible={true}
                margin={2}
                horizontalAlignment="right"
                verticalAlignment="top"
              />
              <Size width={"100%"} height={"100%"} />
              <Animation enabled={false} />
              <Label visible={true}  >
                  <Connector visible={true} length={300} />
                </Label>
              <Tooltip enabled={true} customizeTooltip={customizeTooltip}>
                <Format type="category" />
              </Tooltip>
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChartProduct;
