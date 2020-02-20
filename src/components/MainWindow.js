import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../Store';
import {LineChart, BarChart, Bar, Line, YAxis, CartesianGrid, XAxis} from 'recharts';
import FilterContainer from './FilterContainer';


// for Neighborhoods/Zipcodes https://www.health.ny.gov/statistics/cancer/registry/appendix/neighborhoods.htm


const MainWindow=()=>{
    const [state, dispatch] = useContext(Context);
    const zipcodeData = state.zipcodeKey;
    const allData = state.allDemoData;
    let data = [];
    const currentNeighborhoodFilter = state.selectedNeighborhood;

    

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
                    return zipcodesArr = neighborhood.zipcode;
                }
                // else{
                //     return zipcodesArr = [];
                // }
            })
        })
        return zipcodesArr;
    }
  

    const handleFilterChange=()=>{
        console.log("hit handle filter change")
        let filterZipArr = [];
        data =[];
        filterZipArr = findNeighborhood(currentNeighborhoodFilter);
        console.log("filterZipArr", filterZipArr)
        filterZipArr.forEach((zipcode)=>{
            return data.push(allData.filter((dataRow)=>{
                
                return parseInt(dataRow.jurisdiction_name) === zipcode;
            })[0])
        })
        
        console.log("end data value: ", data)
        return data;

    };

    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
      };

    return(
        <section>
            <h4>Main Window</h4>
            <LineChart width={400} height={400} data={ handleFilterChange() }  margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
                <Line type="monotone" dataKey="count_female" stroke="#000000" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="jurisdiction_name" />
                <YAxis type="number" domain={[0,75]} />
            </LineChart>

            <BarChart width={400} height={400} data={ handleFilterChange() }  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Bar type="monotone" dataKey="count_female" barSize={30} fill="#8884d8" label={renderCustomBarLabel} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"  />
                <XAxis dataKey="jurisdiction_name" />
                <YAxis type="number" domain={[0,75]} />
            </BarChart>

            <FilterContainer />
        </section>
    );
}

export default MainWindow;