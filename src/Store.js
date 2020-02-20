import React, { createContext, useReducer } from 'react';
import FilterReducer from './reducers/FilterReducer';

import data from './data';
import zipcodeKey from './zipcodes';

const initialState = {
    neighborhood: "",
    allDemoData: data,
    zipcodeKey: zipcodeKey,
    selectedNeighborhood: ""
}

const Store=({ children })=>{
    const [ state, dispatch ] = useReducer(FilterReducer, initialState);

    return(
        <Context.Provider value={[state, dispatch]} >
            { children }
        </Context.Provider>
    );
}

export const Context = createContext(initialState);

export default Store;

