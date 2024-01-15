import React from 'react';

import './Newsletter.css';
import ArrowImg from '../assets/images/newsletter_arrow.png';

const Newsletter = () => {

    return <>
        <div className="newsletter">

            <div className="title">
                <h3>Join the Newsletter!</h3>
            </div>

            <div className="text">
                <p>You’ll receive an email every once in a while about new products, courses, and videos!</p>
            </div>

            <div className="input">
                <input type="text" placeholder="name@example.com" />
                <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
            </div>

            <div className="caption">
                <h4>We’ll never share your details. See our <span>Privacy Policy</span></h4>
            </div>

        </div>
    </>

}

export default Newsletter;