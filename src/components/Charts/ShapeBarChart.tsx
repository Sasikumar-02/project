import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const ShapeBarChart:React.FC<{item:any}> = ({item}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
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
                <Bar shape={item?.shapeMale} dataKey={item.valueField} fill="#2B5BCA" barSize={80} />
            </BarChart>
        </ResponsiveContainer>
    )
}
