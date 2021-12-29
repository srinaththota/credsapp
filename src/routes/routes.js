import React from "react";
import {
    Router,
    Switch,
    Route as SimpleRoute
    
  } from "react-router-dom";
import AddCredentials from "../pages/addcredentials/AddCredentials";
import CredentialsList from "../pages/listcredentials/CredentialsList";
import Welcome from "../pages/Welcome";
import history from "./history";
  const AllRoutes= props =>{
      return(
        <>
              <SimpleRoute path="/add" exact>
                  <AddCredentials />
              </SimpleRoute>
              <SimpleRoute path="/list" exact>
                  <CredentialsList />
              </SimpleRoute>
              <SimpleRoute path="/" exact>
                  <Welcome />
              </SimpleRoute>
        </> 
          
          
      )
  }

export default AllRoutes;
