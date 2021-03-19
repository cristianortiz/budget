import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

//this component shows after the user submit a budget amount and ask for the expenses object data
const ExpenseForm = ({ saveExpense, saveCheckExpense }) => {
  //local useState hook to keep trackin of the value typed in the expense_name input field
  const [expense_name, saveExpenseName] = useState("");
  //local useState hook to keep traking the amount typed for the expense in the expense_amount input
  const [expense_amount, saveExpAmount] = useState(0);
  //local useState hook to keep tracking the state of error in form validation
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
      saveError(true); //show error component msg if validation fails
      return;
    }
    saveError(false); //if passing the validation reset the error value

    //creating a new expense object to use in the  useEffect hook in app component
    const expense = {
      expense_name,
      expense_amount,
      id: shortid.generate(),
    };
    //add the new expense to the hook expense state in app.js
    saveExpense(expense);
    saveCheckExpense(true);

    //reset the form inputs afuter succes submit event
    saveExpenseName("");
    saveExpAmount(0);
  }; //end addExpense

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
          onChange={(e) => saveExpenseName(e.target.value)} //
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

ExpenseForm.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  saveCheckExpense: PropTypes.func.isRequired,
};

export default ExpenseForm;
