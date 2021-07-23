import { BUY_CAKE } from "../Actions/actiontypes"

const initialstate={
    numOfCakes:10
};

export const cakereducer=(state=initialstate,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return { numOfCakes:state.numOfCakes + 1}
    
    default:
        return state
    }
}