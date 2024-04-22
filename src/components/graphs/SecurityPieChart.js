import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#449BD5','#204496','#F74141','#F79387','#7DE573'];

const SecurityPieChart = ({ data }) => {
  return (
    <ResponsiveContainer height={300}>
      <PieChart>
        
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#2B5BCA"
          dataKey="value"
        
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend 
          wrapperStyle={{fontSize:18 }}      
          layout="horizontal"
          horizontalAlign="middle"
          align="center"
          iconType="circle" 
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SecurityPieChart;
