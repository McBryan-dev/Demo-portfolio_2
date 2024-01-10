import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/Home.css';

import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";

import Projects from '../assets/data/projects.js';

import HomeImg from '../assets/images/home_img.png';
import LinkImg from '../assets/images/link_img.png';

const Home = () => {

    return <>
        <div className="home_area">

            <div className="content">

                <div className="frame">

                    <div className="text">
                       <p>
                        I'm Arnau Ros, a graphic designer & content creator based in Barcelona. <span>Available</span> for freelance & collaborations. 
                       </p>
                    </div>

                    <div className="image">
                        <img src={HomeImg} alt="" />
                    </div>

                </div>

                <div className="section">

                    <div className="project_sect">

                        <div className="section_title">
                            <div className="title">
                                <h3>Projects</h3>
                            </div>

                            <div className="seperator"></div>
                        </div>

                        <div className="projects">

                            {
                                Projects?.map(project => (
                                    <div className="project" key={project.id} >

                                        <h3>{project.title}</h3>
                                        <img src={project.project_img} />

                                    </div>
                                ))
                            }

                            <div className="link_project">
                                <Link to="/project" >
                                    <div className="plus_sign">
                                        <h6>+</h6>
                                    </div>
                                </Link>    
                            </div>

                        </div>

                    </div>

                    <div className="creation_sect">

                        <div className="section_title">
                            <div className="title">
                                <h3>Content Creation</h3>
                            </div>

                            <div className="seperator"></div>
                        </div>

                        <div className="content">

                            <div className="text">
                                <div className="para_1">
                                    <p>
                                    Join my YouTube channel where I show my design thinking, my process, and my personality. The channel has helped over 200K designers become more proficient in the tools I use everyday, Figma, Webflow & more. Join the journey!
                                    </p>
                                </div>

                                <div className="para_2">
                                <Link to="/contact">
                                        <div className="links">
                                            <p>Get in contact about a sponsorship</p> 
                                            <div> <img src={LinkImg} alt="" /> </div>
                                        </div>
                                </Link>
                                </div>

                            </div>

                            <div className="video_link">
                                <Container>
                                    <div className="video">
                                        <div className="ratio ratio-21x9">
                                            <iframe src="https://www.youtube.com/embed/TK0sq75oJEM?si=Hlo8kL0QGLyOQBSl" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </Container>
                            </div>

                        </div>

                    </div>

                    <div className="about_sect">

                        <div className="section_title">
                            <div className="title">
                                <h3>About Me</h3>
                            </div>

                            <div className="seperator"></div>
                        </div>

                        <div className="content">

                            <div className="text">
                                <div className="para">
                                    <p>
                                    I'm a product designer working on various projects on a wide range of clients. My skillset lies on creating branding packages & websites to deliver the full online experience for new and also veteran businesses.  You can often find me creating videos about design over on YouTube, or sharing my thoughts on my podcast, Dialogue With Designers . I'm passionate about giving back and teaching what I know to the next generation of designers.‍
                                    </p>
                                </div>

                                <div className="faq">

                                    <h4>
                                        Your one stop shop for: 
                                    </h4>

                                    <div className="scrolls">
                                    
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                
            </div>

        </div>
    </>

}

export default Home;