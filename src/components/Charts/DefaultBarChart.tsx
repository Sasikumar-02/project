import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const DefaultBarChart:React.FC<{item: any}> = ({ item }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
          // layout={item?.layout}
          layout="vertical"
        width={500}
        height={300}
        data={item.data}
        margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number"/>
        <YAxis dataKey={item.argumentField}  type="category"/>
        <Tooltip />
        <Legend />
        <Bar dataKey={item.valueField}  fill="#2B5BCA" />
      </BarChart>
    </ResponsiveContainer>
  );
};
