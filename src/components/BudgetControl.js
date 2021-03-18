import React, { Fragment } from "react";

const BudgetControl = ({ budget, remain }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget $: {budget}</div>
      <div className="alert">Remain: ${remain}</div>
    </Fragment>
  );
};

export default BudgetControl;
