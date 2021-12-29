import React from "react";
import { useSelector , connect , useDispatch } from 'react-redux'
import * as actions from '../../store/actionTypes'
import { getCredsAction } from '../../store/actions'
const CredentialsList = ()=>{

   const credentials=useSelector(state => state.credentials)
   const dispatch = useDispatch();

   const listCreds= (data)=>{
       dispatch(getCredsAction(data))
   }
    return(
        <>
        <button onClick={listCreds({})}>list here</button>
        </>
    )
    }
    
export default CredentialsList;