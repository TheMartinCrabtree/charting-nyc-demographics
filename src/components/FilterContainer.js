import React, {useContext, useState, useEffect, useCallback} from 'react';
import {Context} from '../Store';
import '../App.css';


const FilterContainer=(props)=>{
    const [state, dispatch] = useContext(Context);
    const neighborData = state.zipcodeKey;
    
    // current value selected before submit
    const [neighborSelect, setNeighborSelect] = useState("");

    // for populating the list of neighborhoods
    const [neighborhoods, setNeighborhoods] = useState();


    const popNeighborCallback = useCallback(()=>{
        setNeighborhoods(populateNeighborhoods);
    }, [])

    useEffect(()=>{
        if(!neighborhoods){
            popNeighborCallback();
        }

    
    
    const populateNeighborhoods=()=>{
        // console.log("hit populate neighborhoods list")
        let neighborArr = [];
        
        neighborData.forEach((borough)=>{
            // console.log(borough.neighborhoods);
            return borough.neighborhoods.forEach((neighborhood)=>{
                neighborArr.push(neighborhood.name)
            })
        })

        return neighborArr;
    };

    const createNeighborhoodOptions=()=>{
        if(neighborhoods){
            return neighborhoods.map((nHood)=>{
                return <option key={nHood} value={nHood}> {nHood} </option>;
            })
        }
    };

    const handleNeighborSubmit=(event)=>{
        event.preventDefault();
        console.log("dispatching: ", neighborSelect);
        return dispatch({type: "UPDATE_SELECTED_NEIGHBORHOOD", payload: neighborSelect });
    };

    const handleNeighborOnChange=(event)=>{
        event.preventDefault();
        // console.log("handle onChange", event.target.value);
        return setNeighborSelect(event.target.value);
    };

    return(
        <div className="App-div">
            <form onSubmit={handleNeighborSubmit}>
                <label >Neighborhood:  </label>
                <select id="neighborhood" name="neighborhood" onChange={handleNeighborOnChange} >
                    <option key="none" value={""}> Select a Neighborhood </option>
                    {createNeighborhoodOptions()}

                </select>
                <input className="button" type="submit" />
            </form>
            {props.children}
            
        </div>
    )
};

export default FilterContainer;

