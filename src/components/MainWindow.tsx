import React, {useState} from 'react';
import {LineChart, Line, YAxis, CartesianGrid, XAxis} from 'recharts';


// https://www.health.ny.gov/statistics/cancer/registry/appendix/neighborhoods.htm

import data from '../data';
import zipcodeKey from '../zipcodes';


const MainWindow=()=>{
    const [zipcodeData, setZipcodeData] = useState(zipcodeKey);

    
    // zipcodeData[0].neighborhoods["Central Bronx"]

    const findNeighborhood=()=>{
        console.log("hit findNeighborhood")
        return zipcodeData.forEach((borough)=>{
        console.log(borough.neighborhoods);
        })
    }
  
  
    console.log("zipcode data findNeighborhood: ", findNeighborhood());

    return(
        <section>
            <h4>Main Window</h4>
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