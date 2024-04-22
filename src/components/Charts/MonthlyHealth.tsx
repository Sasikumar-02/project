import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "April", healthPercentage: 80 },
  { month: "May", healthPercentage: 75 },
  { month: "June", healthPercentage: 90 },
  { month: "July", healthPercentage: 85 },
  { month: "August", healthPercentage: 70 },
  { month: "September", healthPercentage: 95 },
 
];

const MonthlyHealthProgressBar = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
   <BarChart
        
        layout="vertical"
        width={500}
        height={300}
        data={data}
        margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
        }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="healthPercentage" domain={[0, 100]} />
      <YAxis dataKey="month" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="healthPercentage" fill="#00C49F" barSize={20} />
    </BarChart>
  </ResponsiveContainer>
  );
};
export default MonthlyHealthProgressBar;