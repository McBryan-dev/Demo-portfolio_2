import React from 'react';

import {Link, NavLink} from 'react-router-dom';

import HeaderImg from '../../assets/images/logo.png';

import './Header.css';

const Header = () => {

    const nav_links = [
        {
            path: '/project',
            display: "Work"
        },
        {
            path: '/about',
            display: "About"
        },
        {
            path: '/contact',
            display: "Contact"
        },
        {
            path: '/other',
            display: "Other"
        }
    ]

    return <div className="navbar">
        
        <div className="content">
            <Link to="/">
                <img src={HeaderImg} />
            </Link>

            <div className="links">
                {
                    nav_links?.map((item, index) => (
                        <div className="link" key={item.id + index} >
                            <NavLink to={item.path} className={navClass=> navClass.isActive ? 'active' : ''} >
                                <h2>{item.display}</h2>
                            </NavLink>
                        </div>
                    ))
                }
            </div>
            
        </div>

    </div>
    
}

export default Header;