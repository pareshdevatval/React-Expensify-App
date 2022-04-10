import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from '../components/Dashboard.js';
import AddExpense from '../components/AddExpense';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import { useNavigate } from 'react-router-dom';

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/create" element={<AddExpense />} />
                <Route path="/edit/:id" element={<EditExpensePage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;