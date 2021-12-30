import * as actionTypes from './actionTypes'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
let globalState ={
credentials:[{id:200}]
} 

const credReducer = (state=globalState,action) => {
    if(action.type===actionTypes.GET_CREDENTIALS){
        return {
            ...state,
            credentials:action.payload.credentails
        }
    }
    return state
}

const store=createStore(credReducer, applyMiddleware(ReduxThunk));

export default store;

