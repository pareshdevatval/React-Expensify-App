import React from "react";
import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = (props) => {
    return props.isAuthenticated ? <Navigate to='/dashboard' /> : props.children;
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);