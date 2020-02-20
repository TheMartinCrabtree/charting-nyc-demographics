import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../Store';
import {LineChart, Line, YAxis, CartesianGrid, XAxis} from 'recharts';
import FilterContainer from './FilterContainer';


// for Neighborhoods/Zipcodes https://www.health.ny.gov/statistics/cancer/registry/appendix/neighborhoods.htm


const MainWindow=()=>{
    const [state, dispatch] = useContext(Context);
    const zipcodeData = state.zipcodeKey;
    const allData = state.allDemoData;
    const data = [];
    const currentNeighborhoodFilter = state.selectedNeighborhood;

    useEffect(()=>{
        // when Current Neighborhood changes in global state, display the filtered data
        console.log("hit useEffect")
        
        handleFilterChange();
        
    },[])

    const findNeighborhood=(searchForNeighbor)=>{
        // returns an array of zipcodes for the selected neighborhood
        // console.log("hit findNeighborhood")
        let zipcodesArr = [];

        zipcodeData.forEach((borough)=>{
            // console.log(borough.neighborhoods);
            return borough.neighborhoods.forEach((neighborhood)=>{
                if(neighborhood.name === searchForNeighbor){
                    console.log("found zips for: ", neighborhood.name)
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
  

    const handleFilterChange=()=>{
        console.log("hit handle filter change")
        let filterZipArr = [];
        filterZipArr = findNeighborhood(currentNeighborhoodFilter);
        return console.log("filterZipArr", filterZipArr)
        // data = allData.filter()

    };

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