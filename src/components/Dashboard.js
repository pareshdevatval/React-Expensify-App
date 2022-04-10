import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const Dashboard = (props) => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default Dashboard;