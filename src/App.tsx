import React from 'react';
import {LineChart, Line} from 'recharts';
import './App.css';

import data from './data';
// const data = [
//   {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
//   {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
//   {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
//   {name: 'Page A', uv: 400, pv: 2400, amt: 2400}];


function App() {
  
  console.log("what is data: ", data)

  return (
    <main>
      <header><h3>Charting NYC Demographic Data</h3></header>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="count_female" stroke="#000000" />
      </LineChart>

    </main>
  );
}

export default App;
