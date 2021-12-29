import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = props => {
  return (
    <header className={classes["main-header"]}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>List Credentials of User</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Add Credentials</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
