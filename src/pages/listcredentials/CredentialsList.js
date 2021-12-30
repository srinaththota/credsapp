import React, { useState } from "react";
import { useSelector , useDispatch } from 'react-redux'
import { getCredsAction , resetErrorAction} from '../../store/actions'
import Card from "../../components/card/Card";
import classes from './Credentials.module.css'
const CredentialsList = ()=>{
const [data,setData]=useState({
    userid:'',
    limit:'',
    after:''
})
const [open,setOpen]=useState(true)

   const credentials=useSelector(state => state.credentials)
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
   const result = !credentials?null:credentials.map(obj=>{
       return ( <ul key={Math.random() * 10000}>
            <li >{obj.id}</li>
       </ul>
       )
   });
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
            </div>
        </Card>:null}
        </div>
        {!open && !errorResult && result}
        <h1>{errorResult}</h1>
        </div>
    )
    }
    
export default CredentialsList;