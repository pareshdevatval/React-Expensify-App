import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";
import { useNavigate } from 'react-router-dom';

function AddExpense(props) {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    //props.dispatch(addExpense(expense));
                    props.startAddExpense(expense);
                    navigate(-1);
                }}
            />

        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    };
};

export default connect(undefined, mapDispatchToProps)(AddExpense);