import React from "react";
import {
  FunnelChart,
  Tooltip,
  Funnel,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const FunnelCharts: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div className="App">
      <h5 className="fw-bold text-primary-blue mb-2">
        {item ? item?.title : "Time Spent"}
      </h5>
      <ResponsiveContainer width="100%" height={250}>
        <FunnelChart>
          <Tooltip />
          <Funnel
            dataKey="value"
            data={item?.data}
            isAnimationActive
            lastShapeType="rectangle"
          >
            <LabelList
              position="inside"
              fill="#fff"
              stroke="none"
              dataKey="name"
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FunnelCharts;
