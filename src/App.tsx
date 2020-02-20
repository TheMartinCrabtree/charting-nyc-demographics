import React from 'react';
import {LineChart, Line, YAxis, CartesianGrid, XAxis} from 'recharts';
import './App.css';

// https://www.health.ny.gov/statistics/cancer/registry/appendix/neighborhoods.htm

import data from './data';
import zipcodeData from './zipcodes';


function App() {
  
  console.log("what is data: ", data)
  console.log("zipcode data", zipcodeData)

  return (
    <main>
      <header><h3>Charting NYC Demographic Data</h3></header>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="count_female" stroke="#000000" />
        <CartesianGrid />
        <XAxis />
        <YAxis />
      </LineChart>

    </main>
  );
}

export default App;
