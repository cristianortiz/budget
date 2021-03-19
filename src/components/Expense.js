import React from "react";
import PropTypes from "prop-types";

const Expense = ({ expense }) => (
  <li className="gastos">
    <p>
      {expense.expense_name}
      <span className="gasto">$ {expense.expense_amount}</span>
    </p>
  </li>
);

Expense.propTypes = {
  expense: PropTypes.object.isRequired,
};
export default Expense;
