import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React, { Component } from 'react';

const formatBs = (value) => {
    return `${value} Bs`;
};

const CustomAxisTick = ({x, y, stroke, payload}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text y={20} dy={0} textAnchor="middle" fill="#666">{ payload.value }</text>
    </g>
  );
};

const DolarTodayChart = ({data}) => {
  return (
    <ResponsiveContainer>
      <LineChart data={data}
        margin={{ top: 20, right: 50, left: 20, bottom: 5 }}>
        <XAxis dataKey="day" tick={<CustomAxisTick />}/>
        <YAxis type="number" axisLine={false} tickFormatter={formatBs} domain={['dataMin - 100', 'dataMax + 100']}/>
        <Tooltip/>
        <CartesianGrid strokeDasharray="8 8"/>
        <Line type="monotone" dataKey="minPrice" stroke="#8884d8" activeDot={{r: 8}} strokeWidth={2} />
        <Line type="monotone" dataKey="maxPrice" stroke="#e62020" activeDot={{r: 8}} strokeWidth={2}/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DolarTodayChart;
