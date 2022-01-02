import * as actionTypes from './actionTypes'
import {Client} from '../api/ClientObj'
import { GetCredentialsRequest } from '../protos/credentials_pb'

export const getCredsAction = data =>{
    return async dispatch => {
            try{
                    const request=new GetCredentialsRequest();
                    request.setUserid(data.userid);
                    request.setLimit(data.limit)
                    request.setAfter(data.after)
                    Client.getCredentials(request, {}, (err, response) => {
                    if (response == null) {
                      console.log(err.message)
                        dispatch({
                            type:actionTypes.ERROR,
                            payload:err.message

                          })
                    }else {
                      console.log("no errors")
                      console.log(response.getCredentialsList())
                    dispatch({
                            type:actionTypes.GET_CREDENTIALS,
                            payload:response.getCredentialsList()
                        })
                    }
                  })            
               }catch(err){
                   console.log(err.message)
                   dispatch({
                        type:actionTypes.ERROR,
                        payload:"ERROR"
                   })
               }
    }
}

export const resetErrorAction = ()=>{
  return  dispatch => {
    dispatch({
      type:actionTypes.ERROR
    })
  }
}












































