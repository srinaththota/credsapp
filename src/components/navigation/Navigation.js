import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = props => {
  return (
    <header className={classes["main-header"]}>
      <nav>
        <ul>
        <li>
            <Link to="/" exact>Home</Link>
          </li>
          <li>
            <Link to="/list" >List Credentials of User</Link>
          </li>
          <li>
            <Link to="/add" exact>Add Credentials</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
