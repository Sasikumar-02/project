import React from 'react';
import { PieChart, Pie, Cell, Tooltip,  ResponsiveContainer,Legend } from 'recharts';

const data = [
  { name: 'Treatment Hours', value: 200 },
  { name: 'Visiting Hours', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F'];

const MonthlyProgressPieChart = () => {
  return (
   
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MonthlyProgressPieChart;
