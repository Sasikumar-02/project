import React from "react";
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

const TripleBarChart:React.FC<{item:any}> = ({item}) => {
  return (
    <ResponsiveContainer width="100%" height="90%" className='mt-3'>
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
        <Bar
          dataKey={item.valueField1}
          fill={item.colors[0]}
          radius={[20, 20, 0, 0]}
        />
        <Bar
          dataKey={item.valueField2}
          fill={item.colors[1]}
          radius={[20, 20, 0, 0]}
        />
        <Bar
          dataKey={item.valueField3}
          fill={item.colors[2]}
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TripleBarChart;
