import React, { Fragment, useState } from "react";
import Error from "./Error";

const Question = ({ saveBudget, saveRemain, updateQuestion }) => {
  //useState hook to the total amount of the budget, 0 is the initial value of it
  const [amount, saveAmount] = useState(0);

  //useState hook to keep tracking of form validation error
  const [error, saveError] = useState(false);

  //function to read the value of budget from input field
  const budgetValue = (e) => {
    saveAmount(parseInt(e.target.value, 10)); //parse the string input value of the form to an int type
  };

  //submit event to set the budget amount
  const setBudget = (e) => {
    e.preventDefault();

    //form validation
    if (amount < 1 || isNaN(amount)) {
      saveError(true);
      return;
    }

    //if passing previus validation
    saveError(false); //set error to false
    //set budget as the amount entered by de user
    saveBudget(amount);
    //set remain budget as equals to budget amount, there is not any expenses yet charged to the budget
    saveRemain(amount);
    //update the state to hide the Question component
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

export default Question;
<Fragment>
  <h2>Your Total Budget</h2>
</Fragment>;
