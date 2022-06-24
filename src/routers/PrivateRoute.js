import React from "react";
import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from '../components/Header';

export const PrivateRoute = (props) => {
    const uid = useSelector(state => state.auth.uid);
    return props.isAuthenticated ? (<><Header /><div>{props.children}</div></>) : <Navigate to='/' />;
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);