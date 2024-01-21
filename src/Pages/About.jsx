import React from 'react';

import '../styles/About.css';

import { Link } from 'react-router-dom';

import Carousel from '../shared/Carousel.jsx';

import Blogs from '../assets/data/blogs.js';

import Newsletter from '../shared/Newsletter.jsx';

import ProfileImg from '../assets/images/about_img.jpg';
import SeeNowImg from '../assets/images/see_now.png';

const About = () => {

    return <>
        <div className="about">

            <div className="content">

                <div className="desc_sect">

                    <div className="title">
                        <div className="title_text">
                            <h3>About Me</h3>
                        </div>

                        <div className="seperator"></div>
                    </div>

                    
                    <div className="content">
                        <div className="para">
                            <p>
                            I'm a Frontend Developer working 
                            on various projects on a wide range of clients. My skillset lies on creating branding packages & websites to deliver the full online experience for new and also veteran businesses.
                            <br />
                            <br />
                            You can often find me creating videos about frontend development over on YouTube, or sharing my thoughts on my podcast, Dialogue With othr=er Developers . I'm passionate about giving back and teaching what I know to the next generation of designers.
                            </p>
                        </div>

                        <div className="image">
                            <img src={ProfileImg} />
                        </div>
                    </div>
                    

                </div>

                <div className="guest_sect">

                    <div className="title">
                        <div className="title_text">
                            <h3>Clients</h3>
                        </div>

                        <div className="seperator"></div>
                    </div>

                    <div className="clients">

                        <div className="para">
                            <p>
                                I’ve had the pleasure of 
                                working with some great 
                                clients along the way. 
                                These are some of them!
                            </p>
                        </div>

                        <div className="client">
                            <p>
                                <h3>Hevy</h3>
                                <h3>Alphavive</h3>
                                <h3>Knack</h3>
                                <h3>JoyPixels</h3>
                                <h3>Themesberg</h3>
                                <h3>Rimgard</h3>
                                <h3>Pumpables</h3>
                                <h3>Solules</h3>
                            <br />
                            <span>& 18 More</span>
                            </p>
                        </div>

                    </div>
                    
                </div>

                <div className="email_sect">

                    <div className="section_title">
                        <div className="title">
                            <h3>Say Hello</h3>
                        </div>

                        <div className="seperator"></div>
                    </div>

                    <div className="content">

                        <div className="text">
                            <div className="para_1">
                                <p>
                                    Looking to start a new project or just want to say hi? Send me an email and I’ll do my best to reply within 24 hrs!
                                </p>
                            </div>

                            <div className="para_2">
                                <p>
                                    If contact forms aren’t your thing... send me an email at <span>hello@arnau.design</span>
                                </p>
                            </div>
                        </div>

                        <div className="form">

                            <form>

                                <div className="form-group name">
                                    <div className="name">
                                        <label>
                                            <h3>Name *</h3>
                                        </label>

                                        <div className="inputs">
                                            <input type="text" placeholder="First Name" />
                                            <input type="text" placeholder="Last Name" />
                                        </div>

                                    </div>
                                </div>

                                <div className="form-group inquiries">

                                    <div className="inquiry">
                                        <label for="inquiry">
                                            <h3>Inquiry *</h3>
                                        </label>

                                        
                                        <select id="inquiry">
                                            <option value="client"><h3>Collab/Client</h3></option>
                                        </select>
                                    </div>

                                    <div className="email">
                                        <label>
                                            <h3>Email *</h3>
                                        </label>

                                        <div className="input">
                                            <input type="email" placeholder="hello@arnau.design" />
                                        </div>
                                    </div>
                                
                                </div>

                                <div className="form-group message">

                                    <label>
                                        <h3>Message *</h3>
                                    </label>

                                    <div className="input">
                                        <input type="text" placeholder="Hello..." />
                                    </div>

                                </div>

                                <div className="submit">
                                    <input type="submit" placeholder="Send" value="Send" />
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

                <div className="carousel_sect">

                    <div className="section_title">
                        <div className="title">
                            <h3>What Clients Say</h3>
                        </div>

                        <div className="seperator"></div>
                    </div>

                    <div className="carousel">
                        <div className="container">
                            
                            <Carousel />

                        </div>
                    </div>

                </div>


                <div className="blog_sect">
                        
                    <div className="seperator"></div>

                    <div className="content">

                        <div className="tltle">
                            <h3>Recent Blogs</h3>
                        </div>

                        <div className="blogs">
                            {
                                Blogs?.map((blog) => (
                                    <div className="blog">

                                        <div className="blog_post" key={blog.id}>
                                        

                                            <div className="subject">
                                                <h5>{blog.subject}</h5>
                                            </div>

                                            <div className="bottom_layout">

                                                <div className="version">
                                                    <h6>{blog.version}</h6>
                                                </div>

                                                <div className="link">
                                                    <Link to="/">
                                                        {blog.link}
                                                    </Link>

                                                    <img src={SeeNowImg} alt="" />

                                                </div>

                                            </div>


                                        </div>
                                        
                                        <div className={`li ${blog.line ? "line" : "no-line"}`}> </div>

                                    </div>
                                    
                                    
                                ))
                            }
                        </div>
                        
                    </div>

                </div>

                <div className="news_sect">

                    <div className="wavy_line"><h6>h1hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h6></div>
                
                    <div className="newsletter">

                        <Newsletter />

                    </div>

                </div>


            </div>
            
        </div>
    </>

}

export default About;