import React, { Fragment } from "react";
import { checkRemainBudget } from "../components/helpers";
import PropTypes from "prop-types";

const BudgetControl = ({ budget, remain }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget $: {budget}</div>
      <div className={checkRemainBudget(budget, remain)}>Remain: ${remain}</div>
    </Fragment>
  );
};

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remain: PropTypes.number.isRequired,
};
export default BudgetControl;
