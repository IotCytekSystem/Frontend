import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';

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
    name: '10.00',
    line1: 1600,
    line2: 1200,
  },
  {
    name: '11.00',
    line1: 1000,
    line2: 800,
  },
  {
    name: '12.00 ',
    line1: 400,
    line2: 300,
  },
  {
    name: '13.00 ',
    line1: 800,
    line2: 600,
  },
  {
    name: '14.00',
    line1: 1200,
    line2: 900,
  },
  {
    name: '15.00',
    line1: 600,
    line2: 400,
  },
  {
    name: '16.00',
    line1: 600,
    line2: 400,
  },
  {
    name: '17.00',
    line1: 600,
    line2: 400,
  },
  {
    name: '18.00',
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
    <ResponsiveContainer width="90%" height={300}>

    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="line1" stroke="#8884d8" />
      <Line type="monotone" dataKey="line2" stroke="#82ca9d" />
    </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
