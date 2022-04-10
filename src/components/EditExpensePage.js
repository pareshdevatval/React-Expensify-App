import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const expense = props.expenses.find((expense) => expense.id === id);

    return (
        <div>
            <ExpenseForm
                expense={expense}
                onSubmit={(expense) => {
                    props.editExpense(id, expense);
                    navigate(-1);
                }}
            />
            <button onClick={() => {
                props.removeExpense({ id })
                navigate(-1);
            }}>Remove</button>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expenses: state.expenses
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (id) => dispatch(removeExpense(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);