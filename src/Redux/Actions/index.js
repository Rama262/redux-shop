import {BUY_CAKE,BUY_BISCUITS,FETCH_USERS,FETCH_SUCCESS,FETCH_ERROR,ADD_COUNT} from './actiontypes';
import axios from "axios";
export const buy_cake=()=>{
    return {
        type:BUY_CAKE
    }
}

export const buy_biscuits=()=>{
    return {
        type:BUY_BISCUITS
    }
}

export const fetch_users=()=>{
    return {
        type:FETCH_USERS
    }
}

export const fetch_success=(users)=>{
    return {
        type:FETCH_SUCCESS,
        data:users
    }
}

export const fetch_error=(error)=>{
    return {
        type:FETCH_ERROR,
        data:error
    }
}
export const add_count=()=>{
 return {
     type:ADD_COUNT
 }   
}

export const fetchUsers = () => {
    return function(dispatch) {
      dispatch(fetch_users());
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          let users = response.data.map(user => user.id);
          dispatch(fetch_success(users));
        })
        .catch(error => {
          dispatch(fetch_error(error));
        });
    };
  };