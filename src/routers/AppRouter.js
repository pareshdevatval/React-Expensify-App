import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useDispatch } from 'react-redux';
import Login from '../components/Login.js';
import Dashboard from '../components/Dashboard.js';
import AddExpense from '../components/AddExpense';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import { login, logout } from '../actions/auth.js';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute.js';

const AppRouter = () => {

    const history = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {

        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                dispatch(login(user.uid));
                console.log('Log in');
            } else {
                dispatch(logout());
                console.log('Log out');
            }
        });
    }, []);
    return (
        <div>

            <Routes>
                <Route path="/" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>} />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>} />
                <Route path="/create" element={
                    <PrivateRoute>
                        <AddExpense />
                    </PrivateRoute>} />
                <Route path="/edit/:id" element={
                    <PrivateRoute>
                        <EditExpensePage />
                    </PrivateRoute>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>

    );
};

export default AppRouter;