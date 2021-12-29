import React, { Component } from 'react';
import './App.css';
import { GetCredentialsRequest } from './protos/credentials_pb'
import { Client } from './api/ClientObj'
import Navigation  from './components/navigation/Navigation';

class App extends Component {
  
  callGrpcService = () => {
    const request = new GetCredentialsRequest();
    console.log(request)
    request.setUserid("d31f3dd3-8260-4ab9-b3ac-d286d895cd53");
    request.setLimit(3)
    request.setAfter(10)

   Client.getCredentials(request, {}, (err, response) => {
    if (response == null) {
      console.log(err)
    }else {
      console.log("no errors")
      console.log(response.getCredentialsList())
    }
  })
  }

  render() {
    return (
      <div>
        <Navigation />
          <button style={{padding:10}} onClick={this.callGrpcService}>Click for grpc request</button>
              </div>
    );
  }
}

export default App;