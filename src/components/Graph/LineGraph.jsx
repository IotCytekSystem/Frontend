import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { useState, useEffect } from 'react';
import axios from '../../axiosConfig';

const data = [
  {
    name: '6.00 ',
    line1: 400,
    line2: 300,
  },
  {
    name: '7.00 ',
    line1: 800,
    line2: 600,
  },
  {
    name: '8.00',
    line1: 1200,
    line2: 900,
  },
  {
    name: '9.00',
    line1: 600,
    line2: 400,
  },
  {
    name: '12.00',
    line1: 1600,
    line2: 1200,
  },
  {
    name: '13.00',
    line1: 1000,
    line2: 800,
  },
  {
    name: '6.00 ',
    line1: 400,
    line2: 300,
  },
  {
    name: '7.00 ',
    line1: 800,
    line2: 600,
  },
  {
    name: '8.00',
    line1: 1200,
    line2: 900,
  },
  {
    name: '9.00',
    line1: 600,
    line2: 400,
  },
];

const LineChartComponent = () => {
  const [power, setPower] = useState([]);
  const [current, setCurrent] = useState([]); 
  
  
  useEffect(() => {
    // Define a function to fetch user data from the server
    const fetchUserData = async () => {
      try {
        // Send a GET request to your server's endpoint
        const power = await axios.get("/power/peak");
        const current = await axios.get("/current/peak");
  
  
        setPower(power.data);
  
        setCurrent(current.data)
  
      }
  
      catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
  
    fetchUserData();
  }, []); 
  




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
