import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#fbaca3","#ffda76","#87d3ab"];

export const CyberDonutChart:React.FC<{data:any}> = ({ data }) => {
  return (
    <ResponsiveContainer height={280} width="100%">
      <PieChart margin={{ left: 30, right: 30 }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          innerRadius={80}
          outerRadius={120}
          fill="#2B5BCA"
          dataKey="value"
        >
          {data.map((entry:any, index:any) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
       
      </PieChart>
    </ResponsiveContainer>
  );
};
