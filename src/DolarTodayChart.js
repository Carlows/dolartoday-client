import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import React, { Component } from 'react';

const formatBs = (value) => {
    return `${value} Bs`;
} ;

const DolarTodayChart = ({data}) => {
  return (
    <LineChart
      width={900} height={350} data={data}
      margin={{ top: 20, right: 50, left: 20, bottom: 5 }}>
      <XAxis dataKey="day" />
      <YAxis type="number" axisLine={false} tickFormatter={formatBs} domain={['dataMin - 100', 'dataMax + 100']}/>
      <Tooltip/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Line type="monotone" dataKey="minPrice" stroke="#8884d8" activeDot={{r: 8}} />
      <Line type="monotone" dataKey="maxPrice" stroke="#e62020" activeDot={{r: 8}} />
    </LineChart>
  );
};

export default DolarTodayChart;
