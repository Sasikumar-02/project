import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#F74141","#FDC934","#00CE5F"];

export const CyberDonutChart1:React.FC<{data:any}> = ({ data }) => {
  return (
    <ResponsiveContainer height={350} width="100%">
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
        <Legend 
        wrapperStyle={{ marginLeft: -180,fontSize:18,marginBottom:20 }}        
        align="left" 
        // horizontalAlign="left" 
        layout="horizontal" 
        iconType="circle"/>
      </PieChart>
    </ResponsiveContainer>
    
  );
};
