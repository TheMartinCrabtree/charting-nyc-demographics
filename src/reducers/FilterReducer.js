// update for typescript

const FilterReducer=(state, action)=>{
    console.log("action", action)
    switch(action.type){
        case 'UPDATE_NEIGHBORHOOD':
            return{
                ...state,
                neighborhood: action.payload
            };
        case 'UPDATE_SELECTED_NEIGHBORHOOD':
            return{
                ...state,
                selectedNeighborhood: action.payload
            };
        default:
            return state;
    };

};

export default FilterReducer;