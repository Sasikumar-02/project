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

export const HorizontalBarChart:React.FC<{item:any}> = ({ item }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={item.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={item.argumentField} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={item.valueField} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
