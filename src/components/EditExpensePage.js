import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const expense = props.expenses.find((expense) => expense.id === id);

    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    expense={expense}
                    onSubmit={(expense) => {
                        props.startEditExpense(id, expense);
                        navigate(-1);
                    }}
                />
                <button className="box-button_gray" onClick={() => {
                    props.startRemoveExpense({ id })
                    navigate(-1);
                }}>Remove Expense</button>
            </div>
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
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);