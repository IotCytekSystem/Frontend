import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Jan',
    line1: 400,
    line2: 300,
  },
  {
    name: 'Feb',
    line1: 800,
    line2: 600,
  },
  {
    name: 'Mar',
    line1: 1200,
    line2: 900,
  },
  {
    name: 'Apr',
    line1: 600,
    line2: 400,
  },
  {
    name: 'May',
    line1: 1600,
    line2: 1200,
  },
  {
    name: 'Jun',
    line1: 1000,
    line2: 800,
  },
];

const LineChartComponent = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="line1" stroke="#8884d8" />
      <Line type="monotone" dataKey="line2" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineChartComponent;
