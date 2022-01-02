import * as actionTypes from './actionTypes'

const globalState ={
    creds:[],
    ERROR:null
} 

export const credReducer = (state=globalState,action) => {
    console.log(action)
    if(action.type===actionTypes.GET_CREDENTIALS){
        console.log(action.payload)
        return {
            ...state,
            creds:action.payload
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


