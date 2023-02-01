import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';

const Layout = () => {
    return(
        <Router>
            <Routes>
            <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default Layout;