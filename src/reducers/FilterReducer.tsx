const Reducer=(state: Object, action: any)=>{
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

export default Reducer;



