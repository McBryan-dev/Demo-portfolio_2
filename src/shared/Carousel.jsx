import React from 'react';

import './Carousel.css';
// import '../styles/Home.css'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Testimonial from '../assets/data/testimonial.js';

const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {
                    Testimonial?.map((testimony) => (
                        <div className="content" key={testimony.id}>

                            <div className="para">
                                <p>{testimony.para}</p>
                            </div>

                            <div className="office">
                                <h4>{testimony.name}</h4>
                                <h5>{testimony.role}</h5>
                            </div>

                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Carousel;