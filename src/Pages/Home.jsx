import React, {useRef, useState} from 'react';

import '../styles/Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";

import Projects from '../assets/data/projects.js';
import Newsletter from '../shared/Newsletter.jsx'
import Carousel from '../shared/Carousel.jsx';
import Blogs from '../assets/data/blogs.js'

import HomeImg from '../assets/images/portfolio_img.jpg';
import LinkImg from '../assets/images/link_img.png';
import ScrollImg from '../assets/images/scroll_img.png';
import SeeNowImg from '../assets/images/see_now.png'

const Home = () => {

    const [toggle, setToggle] = useState(true)
    const [toggle_1, setToggle_1] = useState(true)
    const [toggle_2, setToggle_2] = useState(true);

    const toggleRef = useRef();
    const toggleRef_1 = useRef();
    const toggleRef_2 = useRef();

    const toggleText = () => {
        setToggle(!toggle);
    }

    const toggleText_1 = () => {
        setToggle_1(!toggle_1)
    }

    const toggleText_2 = () => {
        setToggle_2(!toggle_2)
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return <>
        <div className="home_area">

            <div className="content">

                <div className="frame">

                    <div className="text">
                       <p>
                        I'm Okononfua Bryan, a Frontend web developer & aspiring content creator based in the UK. <span>Available</span> for freelance & collaborations with other web developers.
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
                                    <p> I'm passionate about both content creation and frontend development. The marriage of creative storytelling and technical finesse in frontend development fuels my excitement. I'm eager to contribute innovative digital experiences seamlessly.</p>
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
                                    I'm a Frontend developer working on various projects on a wide range of clients. My skillset lies on implementing incredible websites & closing out on great deals to deliver the full online experience for new and also veteran businesses.  
                                    <br />
                                    You can often find me creating videos about great websites design over on YouTube, or sharing my thoughts on my podcast, Dialogue With Designers and other Web Developers . I'm passionate about giving back and teaching what I know to the next generation of developer‍s.
                                    </p>
                                </div>

                                <div className="faq">

                                    <h4>
                                        Your one stop shop for: 
                                    </h4>

                                    <div className="scrolls">
                                        
                                        <div className="item">
                                            
                                            <div className="title">

                                                <div className="head">
                                                    <h4>①   Branding / Logo</h4>

                                                    <div className={`scroll_img ${toggle ? '' : 'rot_scroll_img'}`} ref={toggleRef} onMouseEnter={toggleText} onMouseLeave={toggleText}>
                                                        <img src={ScrollImg} />     
                                                    </div>
                                                </div>

                                                <div className="line"></div>

                                            </div>

                                            <div className={`para ${toggle ? 'none' : ''}`}>
                                                <p>
                                                    Developing a cohesive and consistent visual identity for a brand. This involves creating a set of design elements, that collectively represent the brand and its values.
                                                    <br />
                                                    Crafting a unique and memorable logo that serves as a visual representation of the brand to the world. 
                                                </p>
                                            </div>

                                        </div>

                                        <div className="item">
                                            
                                            <div className="title">

                                                <div className="head">
                                                    <h4>②   Packaging</h4>

                                                    <div className={`scroll_img ${toggle_1 ? '' : 'rot_scroll_img'}`} ref={toggleRef_1} onMouseEnter={toggleText_1} onMouseLeave={toggleText_1}>
                                                        <img src={ScrollImg} />     
                                                    </div>
                                                </div>

                                                <div className="line"></div>

                                            </div>

                                            <div className={`para ${toggle_1 ? 'none' : ''}`}>
                                                <p>
                                                    Producing visually captivating packaging for physical 
                                                    products. This comprehensive 
                                                    approach encompasses UI design, responsive design for 
                                                    diverse platforms and screens, and the creation of appealing 
                                                    product to to my clients and other companies.                                                
                                                </p>
                                            </div>

                                        </div>

                                        <div className="item">
                                            
                                            <div className="title">

                                                <div className="head">
                                                    <h4>③   Websites</h4>

                                                    <div className={`scroll_img ${toggle_2 ? '' : 'rot_scroll_img'}`} ref={toggleRef_2} onMouseEnter={toggleText_2} onMouseLeave={toggleText_2}>
                                                        <img src={ScrollImg} />     
                                                    </div>
                                                </div>

                                                <div className="line"></div>

                                            </div>

                                            <div className={`para ${toggle_2 ? 'none' : ''}`}>
                                                <p>
                                                    Delivering captivating websites with awesome user interface and incredible designs to expand your horizons on what AI can actually bring to life. 
                                                </p>
                                            </div>

                                        </div>
                                        
                                    </div>

                                </div>

                            </div>
                            
                            <div className="slide">

                                <p>
                                   <span>HTML</span>       •    <span> CSS</span>       •     <span>ReactJS</span> • <span>VueJS </span>    • <span>JAVASCRIPT</span>      • <span>BOOTSTRAP</span> • <span>WEB DESIGN</span> • <span>WEB CREATION</span> • <span>LOGO</span> 
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="client_sect">

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

        </div>

    </>

}

export default Home;