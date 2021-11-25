import React from "react";
import Customer from "./Customer";
import classes from "./CustomerList.module.css";
const CustomerList = (props) => {
  return (
    <ul className={classes["customer-list"]}>
      {props.customers.map((customer) => (
        <Customer
          key={customer.id}
          name={customer.name}
          email={customer.email}
          feedback={customer.feedback}
        />
      ))}
    </ul>
  );
};

export default CustomerList;
