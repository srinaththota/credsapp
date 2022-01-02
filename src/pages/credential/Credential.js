import React from 'react'
import Card from '../../components/card/Card';
import  classes  from './Credential.module.css'
const Credential = props =>{
    return(
<Card className={classes.input}>
      
        <h2>{props.title}</h2>
        <p>{props.id}</p>
        <p>{props.issuer}</p>
        <p>{props.issuedOn}</p>
    </Card>
    )
}

export default Credential;