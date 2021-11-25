import React from "react";
import classes from "./Customer.module.css";

const Customer = (props) => {
  return (
    <li className={classes.customer}>
      <h2>{props.name}</h2>
      <h3>{props.email}</h3>
      <p>{props.feedback}</p>
    </li>
  );
};

export default Customer;
