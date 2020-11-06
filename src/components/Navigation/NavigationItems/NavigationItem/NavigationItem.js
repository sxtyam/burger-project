import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={props.link}
      exact={props.exact} // We can also use only exact ut that would make all the links to be exact, which we might not need.
      activeClassName={classes.active}>{props.children}</NavLink>
  </li>
);

export default navigationItem;