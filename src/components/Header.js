import React from "react";
import { NavLink } from "react-router-dom";
//import '../styles/styles.scss';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" className={isActive =>
            "selected" + (!isActive ? " unselected" : "")}>Dashboard</NavLink>

        <NavLink to="/create" className={isActive =>
            "selected" + (!isActive ? " unselected" : "")}>Create Expense</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProp = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProp)(Header);