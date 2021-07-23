import {combineReducers, createStore,applyMiddleware} from 'redux';
import { cakereducer} from './Reducers/cakereducer';
import {biscuitreducer} from './Reducers/biscuitreducer';
import {fetchreducer} from './Reducers/fetchreducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { addcount } from './Reducers/addcount';
const rootreducer = combineReducers({
    cakes:cakereducer,
    biscuits:biscuitreducer,
    users:fetchreducer,
    count:addcount
})
export const store = createStore(rootreducer,applyMiddleware(thunk,logger))

