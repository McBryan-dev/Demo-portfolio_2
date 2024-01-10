import React from 'react';
import './Layout.css'

import Header from '../HEADER/Header.jsx';
import Routers from '../../router/Routers.js';
import Footer from '../FOOTER/Footer.jsx';

const Layout = () => {

    return <>
        <div className="layout">
            <Header />
            <Routers />
            <Footer />
        </div>
    </>

}

export default Layout;