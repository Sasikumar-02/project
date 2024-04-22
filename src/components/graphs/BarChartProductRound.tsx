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
} from "devextreme-react/chart";
import { Skeleton, Radio, Popover, Spin } from "antd";

const formatter = new Intl.NumberFormat("en-US");

const BarChartProductRound = ({
  loading,
  key,
  item,
  handleRemoveItem,
  handleActiveChart,
  modalShow,
}:{
  loading: boolean,
  key: string,
  item: any,
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

  const onPointClick = ({ target: point }:{target: any}) => {
    point.select();
  };

  if (loading) {
    return (
      <Skeleton
        active
        paragraph={{
          rows: 10,
        }}
       // size="small"
      />
    );
  }

  const customizeTooltip = (info:any) => {
    return formatter.format(info.originalValue);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className=" mb-3 d-flex align-items-center justify-content-between">
            <h5 className="my-3 graph-title d-flex flex-column	">
              <b className="text-primary-blue text-lg ">
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
          </div>
          <div className="py-2 pb-4">
            <Chart
              id="chart"
              // height={250}
              palette={["#4359AA", "#EE4D4D"]}
              rotated={item?.orientation ? true : false}
              dataSource={item?.data}
            >
              <CommonSeriesSettings
                argumentField={item?.argumentField}
                valueField={item?.valueField}
                type="bar"
                ignoreEmptyPoints={true}
                barPadding={item?.orientation ? 0.4 : 0.6}
                cornerRadius={25}
              />
              <Series
                argumentField={item?.argumentField}
                valueField={item?.valueField}
                // horizontal={false}
                color="#4359AA"
                width={0.8}

              />
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

export default BarChartProductRound;
