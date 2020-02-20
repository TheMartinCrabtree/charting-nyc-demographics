import React, {useContext, useState} from 'react';
import {Context} from '../Store';

const FilterContainer=()=>{
    const [state, dispatch] = useContext(Context);
    const [neighborSelect, setNeighborSelect] = useState("");
    
    // need all zipcodeData to populate dropdown menu
    const zipcodeData = state.zipcodeKey;
    // variable for the selected neighborhood to search for
    const neighborSearch = state.selectedNeighborhood;
    console.log("Currently Selected Neighborhood: ", neighborSearch);

    return(
        <div>
            Filters go here.
        </div>
    )
}

export default FilterContainer;

