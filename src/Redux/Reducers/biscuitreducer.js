import { BUY_BISCUITS } from "../Actions/actiontypes"

const initialstate={
    numOfBiscuits:100
};

export const biscuitreducer=(state=initialstate,action)=>{
    switch(action.type){
        case BUY_BISCUITS:
            return { numOfBiscuits:state.numOfBiscuits - 1}
    
    default:
        return state
    }
}