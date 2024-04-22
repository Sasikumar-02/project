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
const seriesColors = ["#204496", "#6B7A99", "#EA4648"];

const PieChartConcentric = ({
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
  const staticData = [
    { argument1: "Severity 1", percentage: 80 },
    { argument1: "remaining", percentage: 20 },
    { argument2: "Severity 2", percentage: 60 },
    { argument2: "remaining", percentage: 20 },
    { argument3: "Severity 3", percentage: 80 },
    { argument3: "remaining", percentage: 20 },
  ];
  const onPointClick = ({ target: point }) => {
    point.select();
  };
  const customizeTooltip = (arg) => {
    return {
      text: `${arg.argument} - ${(arg.percent * 100).toFixed(2)}%`,
    };
  };
  const calculateTotalValue = (label, seriesIndex) => {
    return staticData
      .filter((data) => data[`argument${seriesIndex + 1}`] === label)
      .map((data) => data.percentage)
      .reduce((total, percentage) => total + percentage, 0);
  };

  const calculatePercentage = (pointValue, totalValue) => {
    return ((pointValue / totalValue) * 100).toFixed(2);
  };

  const customizeLegendText = (pointInfo) => {
    const argument = pointInfo.pointName; // Get the argument label
    const seriesIndex = pointInfo.pointIndex; // Get the series index
    const totalValue = calculateTotalValue(argument, seriesIndex);
    const pointValue = pointInfo.value;
    const percentage = calculatePercentage(pointValue, totalValue);

    return `${argument} ${percentage}%`;
  };

  return (
    <>
      <div className="row tt">
        <div className="col-lg-12">
          <div className=" mb-3 d-flex align-items-center justify-content-between">
            <h5 className="my-3 graph-title d-flex flex-column ">
              <b className="text-primary-blue">
                {item ? item?.title?.toLowerCase() : "Time Spent"}
              </b>
              {/* <b>
                {item? item?.subtitle?.toLowerCase() + " : " + item?.value
                  : "Avg Time Spent : " + item?.value}
              </b> */}
            </h5>
           
          </div>
          <div className="py-2 pb-4">
            <PieChart
              id="pie"
              dataSource={staticData}
              palette={seriesColors}
              title=""
              type="doughnut"
              innerRadius={0.4}
              hoverMode="allArgumentPoints"
            >
              <Series
                // key={index}
                color="rgba(255, 214, 0, 1)"
                argumentField="argument1"
                valueField="percentage"
                border={{
                  visible: true,
                  width: 2,
                  color: "white",
                }}
              />
              <Series
                // key={index}
                color="#3A63DB"
                argumentField="argument2"
                valueField="percentage"
                border={{
                  visible: true,
                  width: 2,
                  color: "white",
                }}
              />
              <Series
              color="#F37090"
                // key={index}
                argumentField="argument3"
                valueField="percentage"
                border={{
                  visible: true,
                  width: 2,
                  color: "white",
                }}
              />
              {/* ))} */}
              <Legend
                visible={true}
                margin={2}
                horizontalAlignment="right"
                verticalAlignment="bottom"
                customizeText={customizeLegendText}
              />
              <Size width={"100%"} height={"100%"} />
              <Tooltip enabled={true} customizeTooltip={customizeTooltip}>
                <Format type="percent" />
              </Tooltip>
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChartConcentric;
