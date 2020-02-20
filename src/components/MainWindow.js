import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../Store';
import {LineChart, Line, YAxis, CartesianGrid, XAxis} from 'recharts';
import FilterContainer from './FilterContainer';


// for Neighborhoods/Zipcodes https://www.health.ny.gov/statistics/cancer/registry/appendix/neighborhoods.htm


const MainWindow=()=>{
    const [state, dispatch] = useContext(Context);
    const zipcodeData = state.zipcodeKey;
    const data = [];
    const currentNeighborhoodFilter = state.selectedNeighborhood;

    useEffect(()=>{
        if(currentNeighborhoodFilter){
            findNeighborhood(currentNeighborhoodFilter);
        }
    },[])

    const findNeighborhood=(searchForNeighbor)=>{
        console.log("hit findNeighborhood")
        let zipcodesArr = [];

        zipcodeData.forEach((borough)=>{
            // console.log(borough.neighborhoods);
            return borough.neighborhoods.forEach((neighborhood)=>{
                if(neighborhood.name === searchForNeighbor){
                    console.log("found neighborhood array", neighborhood.zipcode)
                    zipcodesArr = neighborhood.zipcode;
                }
                else{
                    zipcodesArr = [];
                }
            })
        })
        return zipcodesArr;
    }
  
  
    console.log("zipcode data findNeighborhood: ", findNeighborhood("Central Bronx"));

    return(
        <section>
            <h4>Main Window</h4>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="count_female" stroke="#000000" />
                <CartesianGrid />
                <XAxis />
                <YAxis />
            </LineChart>

            <FilterContainer />
        </section>
    );
}

export default MainWindow;