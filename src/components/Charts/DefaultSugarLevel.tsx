import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,ResponsiveContainer} from 'recharts';

const DefaultSugarLevelChart:React.FC<{data:any}> = ({ data }) => {
  return (
  
      <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={200} data={data} margin={{
          top: 15,
          right: 0,
          left: 0,
          bottom: 5,
        }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="sugarLevel" stroke="rgb(255, 99, 132)" />
        <Tooltip />
        <Legend />
      </LineChart>
      
      </ResponsiveContainer>
      
  );
};

export default DefaultSugarLevelChart;
