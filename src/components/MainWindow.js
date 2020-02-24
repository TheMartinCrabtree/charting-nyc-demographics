
import React, {useState, useContext} from 'react';
import {Context} from '../Store';

import {LineChart, BarChart, Bar, Line, YAxis, CartesianGrid, XAxis, Label} from 'recharts';


import FilterContainer from './FilterContainer';
import '../App.css';


// for Neighborhoods/Zipcodes https://www.health.ny.gov/statistics/cancer/registry/appendix/neighborhoods.htm


const MainWindow=()=>{
    const [state, dispatch] = useContext(Context);
    const [changeGraph, setChangeGraph] = useState(true);
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

    const handleChangeGraph=()=>{
        console.log("hit change graph");
        return changeGraph? setChangeGraph(false) : setChangeGraph(true);
    }

    const renderGraph=()=>{
        if(changeGraph){
            return(

                <LineChart 
                    width={400} 
                    height={350} 
                    data={ handleFilterChange() }  
                    margin={{ top: 20, right: 10, bottom: 20, left: 10 }} 
                >
                    <Line type="monotone" dataKey="count_female" stroke="#000000" />
                    <Line type="monotone" dataKey="count_male" stroke="#61dafb" />
                    <CartesianGrid stroke="#000000" strokeDasharray="3 3" />
                    <XAxis dataKey="jurisdiction_name" tick={{fill: "#282c34"}}  tickLine={{stroke: "#000000"}} >
                        <Label value="Zip Code" position="bottom" offset={0} />
                    </XAxis>
                    <YAxis type="number" domain={[0,75]} />
                </LineChart>

            );
        }
        else if(!changeGraph){
            return(
                <BarChart 
                    width={400} 
                    height={350} 
                    data={ handleFilterChange() }  
                    margin={{ top: 20, right: 10, bottom: 20, left: 10 }}
                >
                    <Bar type="monotone" dataKey="count_female" barSize={30} fill="rgba(8, 25, 216,0.80)" label={renderCustomBarLabel} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"  />
                    <XAxis dataKey="jurisdiction_name" >
                        <Label value="Zip Code" position="bottom" offset={0} />
                    </XAxis>
                    <YAxis type="number" domain={[0,75]}  />
                </BarChart>
            );
        }
    }

    return(
        <section className="App-section">
            <div className="grid-container">
                <div className="grid-item"></div>
                <div className="grid-item">
                    <h3 className="heading-text">Recharts Demo: Charting NYC Demographic Data</h3>
                    <h4 className="heading-text"> Male (blue) and Female (black) Respondents by Zip Code </h4>
                    <div className="Graph">
                       { renderGraph() }
                    </div>
                </div>
                <div className="grid-item">
                    <FilterContainer>
                        <button className="button" onClick={ handleChangeGraph }> Change Graph </button>
                    </FilterContainer>
                </div>
            </div>
            

            
        </section>
    );
}

export default MainWindow;

