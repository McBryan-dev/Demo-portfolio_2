import React from 'react';

import '../styles/Other.css';

import OtherImg from '../assets/images/portfolio_img.jpg';

import { Container, Row, Col } from 'react-bootstrap';

import {Link} from 'react-router-dom';

const Other = () => {
    return <>
        <div className="other">

            <div className="contnt">

                <Container>

                    <Row>

                        <div className="cont">

                            <Col lg="4">

                                <div className="my_desc">
                                    <p>
                                        Hi, I'm OKONONFUA BRYAN, a passionate frontend developer with a keen eye for design
                                        and a love for crafting engaging user experiences. My journey in web development
                                        started during my highschool years,
                                        and since then, I've been on a continuous learning path, keeping up with the latest
                                        technologies and design trends.
                                        I specialize in creating responsive and intuitive user interfaces using HTML, CSS, VUEjs, REACTjs, BOOTSTRAP, TAILWIND.
                                        My goal is to not only write clean and efficient code but also to create visually stunning websites
                                        that leave a lasting impression.
                                        Apart from coding, some of my hobbies are: <br /><br />
                                        <ul>

                                            <li>Playing Basketball</li>
                                            <li>Playing Football</li>
                                            <li>Reading</li>

                                        </ul>   
                                    </p>
                                
                                    <br />

                                    <div className="link">
                                        <Link to="/contact"><h2> Let's connect and create something amazing together!</h2></Link>
                                    </div>
    
                                </div>

                            </Col>

                            <Col lg="8">

                                <div className="image">
                                    <img src={OtherImg} alt="" />
                                </div>

                            </Col>

                        </div>

                    </Row>

                </Container>

            </div>
        
        </div>
    </>
}

export default Other;