import React from 'react';

import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../Pages/Home.jsx';
import About from '../Pages/About.jsx';
import Contact from '../Pages/Contact.jsx';
import Project from '../Pages/Project.jsx';
import Other from '../Pages/Other.jsx';

const Routers = () => {

    return <>
        <Routes>
            <Route path="/"  element={<Navigate to="/home/" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/other" element={<Other />} />
        </Routes>
    </>

}

export default Routers;