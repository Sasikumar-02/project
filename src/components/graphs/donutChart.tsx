import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#449BD5", "#F79387"];

export const DonutChart:React.FC<{data: any}> = ({ data }) => {
  return (
    <ResponsiveContainer height={300} width="100%">
      <PieChart margin={{ left: 30, right: 30 }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          innerRadius={100}
          outerRadius={140}
          fill="#2B5BCA"
          dataKey="value"
        >
          {data.map((entry:any, index:any) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend align="right" verticalAlign="middle" layout="vertical" iconType="circle"/>

      </PieChart>
    </ResponsiveContainer>
  );
};
