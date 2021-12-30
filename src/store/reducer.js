import * as actionTypes from './actionTypes'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
let globalState ={
credentials:[{id:200}],
ERROR:null
} 

const credReducer = (state=globalState,action) => {
    console.log(action)
    if(action.type===actionTypes.GET_CREDENTIALS){
        return {
            ...state,
            credentials:action.payload.credentails
        }
    }
    if(action.type===actionTypes.ERROR){
        return {
            ...state,
            ERROR:action.payload
        }
    }
    if(action.type===actionTypes.RESET_ERROR){
        return {
            ...state,
            ERROR:null
        }
    }
    return state
}

const store=createStore(credReducer, applyMiddleware(ReduxThunk));

export default store;

