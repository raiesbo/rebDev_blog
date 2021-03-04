import React from 'react';

import Footer from './footer';
import Header from './header';

import '../styles/index.scss';
import './layout.scss';

export default function Layout({ children }) {
    return (
        <div className="container">
            <div className="content">
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}