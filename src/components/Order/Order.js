import React from 'react';

import classes from './Order.module.css';

const order = (props) => (
  <div className={classes.order}>
    <p>Ingredients: salad(1)</p>
    <p>Price: <strong>USD 5.30</strong></p>
  </div>
);

export default order;