import React from 'react';

import LogoImg from '../../assets/images/logo.png';

import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {

    return <>
        <div className="footer">
            
            <div className="content">
                
                <div className="logo_right">
                    <div className="logo">
                        <img src={LogoImg} alt="" />
                    </div>

                    <div className="right">
                        <h5>© 2021 Okononfua Bryan, LLC. All rights reserved.© 2021 Okononfua Bryan, LLC. All rights reserved.</h5>
                    </div>
                </div>

                <div className="links">

                    <h2>Find me on:</h2>

                    <div className="github_link">
                        <Link to="https://github.com/McBryan-dev" target="_blank">
                            <i class="fa-brands fa-github"></i>
                        </Link>
                    </div>

                    <div className="facebook_link">
                        <Link to="https://www.facebook.com/profile.php?id=100088837636710">
                            <i class="fa-brands fa-facebook-f"></i>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    </>

}

export default Footer;