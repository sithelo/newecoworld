import React from 'react';
import Footer from '../footer';
import Navbar from '../navbar';
import './style.css';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer />
        </>
    );
};

export default Layout;