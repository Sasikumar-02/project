import React, { useState } from "react";
import {
  Chart,
  Series,
  ZoomAndPan,
  CommonSeriesSettings,
  Title,
  Tooltip,
  Legend,
  ValueAxis,
  Size,
  Animation,
  ArgumentAxis,
  Label,
  Tick,
} from "devextreme-react/chart";
import { Skeleton, Radio, Popover, Spin } from "antd";
const formatter = new Intl.NumberFormat("en-US");

const BarChart  = ({
  loading,
  chartKey, // Renamed from key
  item,
  handleRemoveItem,
  handleActiveChart,
  modalShow,
}: {
  loading: boolean;
  chartKey: string; // Assuming chartKey is a string, adjust the type as needed
  item: any; // Adjust the type as needed
  handleRemoveItem: () => void; // Adjust the type as needed
  handleActiveChart: () => void; // Adjust the type as needed
  modalShow: boolean; // Adjust the type as needed
}) => {
  // const [chartItems, setChartItems] = useState(items);
  // const handleRemoveItem = (index) => {
  //     const updatedItems = [...chartItems];
  //     updatedItems.splice(index, 1);
  //     setChartItems(updatedItems);
  //   };

  const onPointClick = ({ target: point }: { target: any }) => {
    point.select();
};


  if (loading) {
    return (
      <Skeleton
        active
        paragraph={{
          rows: 10,
        }}
        //size="small"
      />
    );
  }

  const customizeTooltip = (info:any) => {
    return (info?.argument+" : "+info.originalValue);
  };

  function customizeLabel(argInfo:any) {
    const labelText = argInfo.valueText;
    if (argInfo.isTruncated) {
        return {
            text: labelText,
            tooltip: labelText
        };
    }

    return labelText;
}

  return (
    <>
      <div className="row">
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
          </div>
          <div className="py-2 pb-4">
            <Chart
              id="chart"
              // height={250}
              palette={["#4359AA", "#EE4D4D"]}
              rotated={item?.orientation=="false" ? false : true}
              dataSource={item?.data}
              height={item.height? item.height : 400}
            >
              <CommonSeriesSettings
                argumentField={item?.argumentField}
                type="bar"
                // ignoreEmptyPoints={true}
                // barPadding={0.7}
                // barWidth={0.5}
              />
              <Series
                argumentField={item?.argumentField}
                valueField={item?.valueField}
                //horizontal={false}
                color="#4359AA"
                // width={0.8}
              />
              {/* <Series
                argumentField={item?.argumentField}
                valueField={item?.valueField2}
                horizontal={false}
                color="#EE4D4D"
                width={0.8}
              /> */}
              <ArgumentAxis>
                <Label overlappingBehavior="none" />
              </ArgumentAxis>
              <ValueAxis inverted={false} />
              <Legend
                visible={false}
                margin={0}
                horizontalAlignment="right"
                verticalAlignment="bottom"
              />
              {/* <Size width={"100%"} height={"100%"} /> */}
              <Tooltip
                enabled={true}
                location="edge"
                contentRender={customizeTooltip}
              />
              <Animation enabled={false} />
            </Chart>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
