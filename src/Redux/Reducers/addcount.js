import { ADD_COUNT } from "../Actions/actiontypes"

const initialstate={
    noOfCount:100
}

export  const addcount =(state=initialstate,action)=>{
switch(action.type){
    case ADD_COUNT:
        return { noOfCount : state.noOfCount-1}
    
    default: 
       return state
    
}
}

