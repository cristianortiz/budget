import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Question = ({ saveBudget, saveRemain, updateQuestion }) => {
  //local useState hook to keep tracking of the input field in the Question form of the budget, 0 is the default value
  const [amount, saveAmount] = useState(0);

  //useState hook to keep tracking of form validation error
  const [error, saveError] = useState(false);

  //function of local state hook amount, to read the value of budget from input field, onChange event
  const budgetValue = (e) => {
    saveAmount(parseInt(e.target.value, 10)); //parse the string input value of the form to an int type
  };

  //form submit event to set the budget amount
  const setBudget = (e) => {
    e.preventDefault();

    //form validation
    if (amount < 1 || isNaN(amount)) {
      saveError(true);
      return;
    }

    //if passing previus validation
    saveError(false); //set error to false
    //set the amount entered by the user as the initial value of budget useState hook in app component
    saveBudget(amount);
    //set remain budget as equals to budget initial amount, there is not any expenses yet charged to the budget
    //this set the remain useState hook initial value in app component
    saveRemain(amount);
    //update the useState hook show_question in app component to hide the Question component
    updateQuestion(false);
  };

  return (
    <Fragment>
      <h2>Your Total Budget</h2>

      {error ? <Error msg="the amount is not valid" /> : null}

      <form onSubmit={setBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Total Budget in $"
          onChange={budgetValue}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Set My Budget"
        />
      </form>
    </Fragment>
  );
};
Question.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  saveRemain: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired,
};

export default Question;
