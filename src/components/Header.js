import React from "react";
import { NavLink } from "react-router-dom";
//import '../styles/styles.scss';


const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" className={isActive =>
            "selected" + (!isActive ? " unselected" : "")}>Dashboard</NavLink>

        <NavLink to="./create" className={isActive =>
            "selected" + (!isActive ? " unselected" : "")}>Create Expense</NavLink>

        <NavLink to="./help" className={isActive =>
            "selected" + (!isActive ? " unselected" : "")}>Help</NavLink>
    </header>
);

export default Header;