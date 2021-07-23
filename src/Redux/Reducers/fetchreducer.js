import { FETCH_USERS,FETCH_SUCCESS,FETCH_ERROR } from "../Actions/actiontypes"

const initialstate={
    isLoading:false,
    users:[],
    error:''
};

export const fetchreducer=(state=initialstate,action)=>{
    switch(action.type){
        case FETCH_USERS:
            return { ...state,isLoading:true}
            case FETCH_SUCCESS:
                return { isLoading:false,users:action.data,error:''}
                case FETCH_ERROR:
            return { isLoading:false,users:[],error:action.error}
    
    default:
        return state
    }
}