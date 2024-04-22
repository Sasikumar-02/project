import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', calories: 2000, fat: 60, pressure: 120 },
  { name: 'Feb', calories: 1800, fat: 55, pressure: 118 },
  { name: 'Mar', calories: 2200, fat: 65, pressure: 125 },
  { name: 'Apr', calories: 1900, fat: 58, pressure: 123 },
  { name: 'May', calories: 2100, fat: 63, pressure: 126 },
  { name: 'Jun', calories: 1950, fat: 59, pressure: 124 },
  { name: 'Jul', calories: 2050, fat: 62, pressure: 122 },
];

const HealthTrackingChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="calories" stroke="#8884d8" name="Calories" />
        <Line type="monotone" dataKey="fat" stroke="#82ca9d" name="Fat" />
        <Line type="monotone" dataKey="pressure" stroke="#FF8042" name="Pressure" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HealthTrackingChart;
