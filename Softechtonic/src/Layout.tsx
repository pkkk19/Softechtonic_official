import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import Services from './Pages/Services';

const Layout = () => {
    return(
        <Router>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/Services' element={<Services/>}/>
            </Routes>
        </Router>
    );
};

export default Layout;