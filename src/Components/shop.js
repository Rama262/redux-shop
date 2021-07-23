import React from 'react'
import './style.css'
import {connect} from 'react-redux'
import {buy_cake ,buy_biscuits,fetchUsers,add_count} from '../Redux/Actions'
 const  Shop=(props)=> {
    return (
        <div>
 <h1 className="title">Bakery Shop</h1>
    <div className="items">
  <div className="item">
    <p>Cakes</p>
    <p>Available:{props.numOfCakes}</p>
    <button onClick={props.buy_cake}>BUY</button>
  </div>
  <div className="item">
    <p>Biscuits</p>
    <p>Available:{props.numOfBiscuits}</p>
    <button onClick={props.buy_biscuits}>BUY</button>
  </div>
  <div className="item">
    <p>Users</p>
    <p>Available:{props.users.length}</p>
    <button onClick={props.fetchUsers}>BUY</button>
  </div>
  <div className="item">
    <p>count</p>
    <p>Available:{props.noOfCount}</p>
    <button onClick={props.add_count}>BUY</button>
  </div>
        </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        numOfCakes: state.cakes.numOfCakes,
        numOfBiscuits:state.biscuits.numOfBiscuits,
        users:state.users.users,
        noOfCount:state.count.noOfCount
      };
    
}
const mapStateToDispatch = (dispatch)=>{
    return {
        buy_cake:()=>{ dispatch(buy_cake())},
        buy_biscuits:()=>{dispatch(buy_biscuits())},
        fetchUsers:()=>{dispatch( fetchUsers())},
        add_count:()=>{dispatch(add_count())}
      };
    
}
export default connect(mapStateToProps,mapStateToDispatch)(Shop)





