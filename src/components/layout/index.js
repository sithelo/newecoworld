import React from 'react';
import Footer from '../footer';
import navbar from '../navbar';
import './style.css';

const layout = ({ children }) => {
    return (
        <>
            <navbar/>
            {children}
            <Footer />
        </>
    );
};

export default layout;