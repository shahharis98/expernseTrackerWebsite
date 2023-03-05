import react, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const [State, setState] = useState(false);
  const setStateHandler = () => {
    setState(true);
  };
  const stopEditingHandler = () => {
    setState(false);
  };
  return (
    <div className="new-expense">
      {!State && <button onClick={setStateHandler}>Add newExpense</button>}

      {State && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
