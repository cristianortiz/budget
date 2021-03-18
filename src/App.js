import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesList from "./components/ExpensesList";
import BudgetControl from "./components/BudgetControl";

function App() {
  //useStte hook to keep track of the initial budget set by the user in Question component
  const [budget, saveBudget] = useState(0);
  //useState hook to keep tracking and update the remain amount of the budget after expenses
  const [remain, saveRemain] = useState(0);
  //useState hook to set the hide the question component after the user submit a initial budget
  const [show_question, updateQuestion] = useState(true);
  //useState hook to keep tracking the expenses list, show the expenses in ExpenseList comp, the expenses are submitted by the user in ExpenseForm comp
  const [expenses, saveExpenses] = useState([]);

  //useState hook to keep tracking of an expense objet data submited in ExpenseForm comp, this hook is used in the useEffect hook for update the budget
  const [expense, saveExpense] = useState({});

  //useState hook
  const [check_expense, saveCheckExpense] = useState(false);

  //useEffect hook to update the budgetcomponent remain amount considering the expenses submitted by the user
  useEffect(() => {
    if (check_expense) {
      //copy of the expenses in the exp state and then adding the new expense to the expenses useState hook, expense is the dependency
      saveExpenses([...expenses, expense]);
      //keeping track and update of the remain budget minus the expense
      const remainBudget = remain - expense.expense_amount;
      saveRemain(remainBudget); //useState remain hook update function

      //reset to false
      saveCheckExpense(false);
    }
  }, [expense, check_expense, remain, expenses]);

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>;
        <div className="contenido-principal contenido">
          {show_question ? (
            <Question
              saveBudget={saveBudget}
              saveRemain={saveRemain}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <ExpenseForm
                  saveExpense={saveExpense}
                  saveCheckExpense={saveCheckExpense}
                />
              </div>
              <div className="one-half column">
                <ExpensesList expenses={expenses} />
                <BudgetControl budget={budget} remain={remain} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  ); //end return
}

export default App;
