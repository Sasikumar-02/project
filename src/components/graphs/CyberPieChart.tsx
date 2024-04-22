import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#ADDCFF', '#4296D1', '#0B4266', '#D0EAFD'];

const CyberPieChart:React.FC<{data:any}> = ({ data }) => {
  return (
    <ResponsiveContainer height={300}>
      <PieChart>
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconType="circle" 
         
        />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
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

export default CyberPieChart;
