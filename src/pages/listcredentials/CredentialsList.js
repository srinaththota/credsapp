import React, { useState } from "react";
import { useSelector , useDispatch } from 'react-redux'
import { getCredsAction } from '../../store/actions'
import Card from "../../components/card/Card";
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
        <>
        <button onClick={()=>setOpen(true)}>Add details</button>
       {open? <Card>
            <input type="text" placeholder="userid" value={data.userid} onChange={userIdHandler} /> <br />
            <input type="text" placeholder="limit" value={data.limit} onChange={limitHandler} /> <br />
            <input type="text" placeholder="after" value={data.after} onChange={afterHandler} /> <br />
            <button onClick={()=>listCreds(data)}>list here</button>
        </Card>:null}
        
        *{result}*
        </>
    )
    }
    
export default CredentialsList;