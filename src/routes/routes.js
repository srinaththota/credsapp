import React from "react";
import {
    Route as SimpleRoute
  } from "react-router-dom";
import AddCredentials from "../pages/addcredentials/AddCredentials";
import CredentialsList from "../pages/listcredentials/CredentialsList";
import Welcome from "../pages/Welcome";

  const AllRoutes= props =>{
      return(
        <>
              <SimpleRoute exact path="/add" >
                  <AddCredentials />
              </SimpleRoute>
              <SimpleRoute exact path="/list" >
                  <CredentialsList />
              </SimpleRoute>
              <SimpleRoute exact path="/">
                  <Welcome />
              </SimpleRoute>
        </> 
          
          
      )
  }

export default AllRoutes;
