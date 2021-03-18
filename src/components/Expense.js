import React from "react";
const Expense = ({ expense }) => (
  <li className="gastos">
    <p>
      {expense.expense_name}
      <span className="gasto">$ {expense.expense_amount}</span>
    </p>
  </li>
);

export default Expense;
