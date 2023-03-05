import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../Ui/Card";
import ExpensesFilter from "./expenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart"

function Expenses(props) {
  const [filterYear, setFilter] = useState("2020");
  console.log(props);
  const filterDataHandler = (filterdata) => {
    setFilter(filterdata);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <div>
     

      <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        sendFilterData={filterDataHandler}
      />
      <ExpenseChart expense = {filteredExpense}/>
        <ExpenseList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
