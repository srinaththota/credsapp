import React from 'react'
import Card from '../../components/card/Card';
const Credential = props =>{
    return(
<Card style={{ marginBottom: '1rem' }}>
      
        <h2>{props.title}</h2>
        <p>{props.id}</p>
        <p>{props.issuer}</p>
        <p>{props.issuedOn}</p>
    </Card>
    )
}

export default Credential;