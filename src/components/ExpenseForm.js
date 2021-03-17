import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const ExpenseForm = () => {
  //hook to keep trackin the value typed in the expense input field
  const [expense_name, saveExpense] = useState("");
  //hook to keep traking the amount typed for the expense in the expense_amount input
  const [expense_amount, saveExpAmount] = useState(0);

  //hook to keep tracking the state of error in form validation
  const [error, saveError] = useState(false);

  //when the user submit a new expense
  const addExpense = (e) => {
    e.preventDefault();

    //validate the form
    if (
      expense_amount < 1 ||
      isNaN(expense_amount) ||
      expense_name.trim() === ""
    ) {
      saveError(true);
      return;
    }

    saveError(false);

    //creating the new expense object
    const expense = {
      expense_name,
      expense_amount,
      id: shortid.generate(),
    };

    console.log(expense);
  };
  return (
    <form onSubmit={addExpense}>
      <h2>Add the Expenses</h2>
      {error ? (
        <Error msg="amount not valid, or both fiels are mandatory" />
      ) : null}
      <div className="campo">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Example: Transport"
          name="expense_name"
          value={expense_name}
          onChange={(e) => saveExpense(e.target.value)} //
        />
      </div>
      <div className="campo">
        <label>Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Example: 400"
          name="expense_amount"
          value={expense_amount}
          onChange={(e) => saveExpAmount(parseInt(e.target.value))} //
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add Expense"
      />
    </form>
  );
};

export default ExpenseForm;
