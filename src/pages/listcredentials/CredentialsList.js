import React, { useState } from "react";
import { useSelector , useDispatch } from 'react-redux'
import { getCredsAction } from '../../store/actions'
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
    return(
        <div className={classes.align}>
       {!open && <button onClick={()=>setOpen(!open)}>Add details</button>}
        <div>
       {open? <Card>
           <div>
            <input type="text" placeholder="userid" value={data.userid} onChange={userIdHandler} /> 
            </div>
            <div>
            <input type="text" placeholder="limit" value={data.limit} onChange={limitHandler} />
            </div>
            <div>
            <input type="text" placeholder="after" value={data.after} onChange={afterHandler} /> 
            </div>
            <div>
            <button onClick={()=>listCreds(data)}>list here</button>
            </div>
        </Card>:null}
        </div>
        {!open && result}
        </div>
    )
    }
    
export default CredentialsList;