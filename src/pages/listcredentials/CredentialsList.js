import React, { useState } from "react";
import { useSelector , useDispatch } from 'react-redux'
import { getCredsAction , resetErrorAction, getAllCredsAction} from '../../store/actions'
import Card from "../../components/card/Card";
import classes from './Credentials.module.css'
import Credential from "../credential/Credential";
const CredentialsList = ()=>{
const [data,setData]=useState({
    userid:'',
    limit:'',
    after:''
})
const [open,setOpen]=useState(true)

   const credentials=useSelector(state => state.creds)
   console.log(credentials)
   const errorMessage=useSelector(state => state.ERROR)
   const dispatch = useDispatch();

   const listCreds= (data)=>{
       dispatch(getCredsAction(data))
       setData({
        userid:'',
        limit:'',
        after:''
    })
    setOpen(false)
   }

   const listAllCreds= (data)=>{
    dispatch(getAllCredsAction(data))
    setData({
     userid:'',
     limit:'',
     after:''
 })
 setOpen(false)
}
   const userIdHandler=e=>{
       const newData={...data}
       newData.userid=e.target.value
       setData(newData);
   }
   const limitHandler=e=>{
    const newData={...data}
    newData.limit=e.target.value
    setData(newData);
}
const afterHandler=e=>{
    const newData={...data}
    newData.after=e.target.value
    setData(newData);
}
   const result = credentials?credentials.map((obj,i)=>{

       const [id,issuedOn,subject,issuer,title] = [0,1,2,3,4]
       return ( <Credential key={Math.random() * 10000}
        id={obj.array[id]}
        issuedOn={obj.array[issuedOn]}
        subject={obj.array[subject]}
        issuer={obj.array[issuer]}
        title={obj.array[title]} />   
       )
   }):null
   const resetHandler = ()=>{
    setOpen(!open)
    dispatch(resetErrorAction())
   }

   const errorResult=errorMessage?errorMessage:null
    return(
        <div className={classes.align}>
       {!open && <button onClick={resetHandler}>Add details</button>}
        <div>
       {open? <Card className={classes.input}>
           
            <input type="text" placeholder="userid" value={data.userid} onChange={userIdHandler} /> 
            <input type="text" placeholder="limit" value={data.limit} onChange={limitHandler} />
            <input type="text" placeholder="after" value={data.after} onChange={afterHandler} /> 
           
            <div>
            <button onClick={()=>listCreds(data)}>list here</button>
            <button onClick={()=>listAllCreds(data)}>list ALL here</button>
            </div>
        </Card>:null}
        </div>
        {!open && !errorResult && result}
        <h1>{errorResult}</h1>
        </div>
    )
    }
    
export default CredentialsList;