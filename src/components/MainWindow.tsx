import React from 'react';
import {LineChart, Line, YAxis, CartesianGrid, XAxis} from 'recharts';


// https://www.health.ny.gov/statistics/cancer/registry/appendix/neighborhoods.htm

import data from '../data';

const MainWindow=()=>{



    return(
        <section>
            <h4>Main Window</h4>
            <header><h3>Charting NYC Demographic Data</h3></header>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="count_female" stroke="#000000" />
                <CartesianGrid />
                <XAxis />
                <YAxis />
            </LineChart>
        </section>
    );
}

export default MainWindow;