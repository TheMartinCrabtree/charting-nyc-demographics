// update for typescript

const FilterReducer=(state, action)=>{
    switch(action.type){
        case 'UPDATE_NEIGHBORHOOD':
            return{
                ...state,
                neighborhood: action.payload
            };
        default:
            return state;
    };

};

export default FilterReducer;