const initialState = 0;
const incDecReducer = (state = initialState, action) => {

    if(action.type ==='increment'){
        console.log('increment counter excuted')
        return state = state + 1;
    }

    else if(action.type === 'decrement'){

    console.log('decrement counter excuted')

    if(state > 0){
        return state = state - 1;
    }else{
        return state;
    }
    }
    else{
        console.log('default state returned')
        return state;
    }
}  

export default incDecReducer;