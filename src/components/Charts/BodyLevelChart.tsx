import React from 'react';
import { PieChart, Pie, Cell, Tooltip ,ResponsiveContainer,Legend} from 'recharts';

const data = [
  { name: 'Blood Oxygen Level', value: 95 },
  { name: 'Body Water Level', value: 65 },
  { name: 'Protein Level', value: 70 },
  { name: 'Vitamin Level', value: 80 },
  { name: 'Mineral Level', value: 60 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const HealthPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          // label={renderCustomizedLabel}
          outerRadius={80}
          fill="#2B5BCA"
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

export default HealthPieChart;
