import React from 'react';

import '../styles/Project.css';

import {Link} from 'react-router-dom';

import WorkImg1 from '../assets/images/work_1.png';
import WorkImg2 from '../assets/images/work_2.png';
import WorkImg3 from '../assets/images/work_3.png';
import WorkImg4 from '../assets/images/work_4.png';

import Works from '../assets/data/works.js';

const Project = () => {

    return <>
        <div className="project">
            
            <div className="content">

                <div className="works">

                    <div className="project_image">
                        <Link to="https://meta-blog-site.onrender.com" target="_blank">
                            <img src= {WorkImg1} alt="" />
                        </Link>
                    </div>

                    <div className="desc">

                        <div className="title">
                            <h4>Meta-Blog Project</h4>
                        </div>

                        <div className="para">
                            <p>
                                🌍 <span>Meta-Blogging Unleashed:</span> Dive into
                                    the heart of our meta-blog, where we 
                                    transcend conventional travel writing. 
                                    Unveiling not just the destinations, 
                                    but the essence of the journey itself, 
                                    our meta-blog crafts narratives that 
                                    resonate beyond the ordinary. Immerse 
                                    yourself in a tapestry of vivid 
                                    descriptions, personal reflections, 
                                    and cultural insights that breathe 
                                    life into each adventure.
                            </p>
                        </div>

                    </div>

                </div>


            

                <div className="creation">

                    <div className="work_1_2">

                        <div className="work_1">

                            <div className="work_image">
                                <Link to="https://travel-guide-c50r.onrender.com" target="_blank" >
                                    <img src={WorkImg2} alt="" />
                                </Link>
                            </div>

                            <div className="desc">

                                <div className="title">
                                    <h4>Travel-Tour Project</h4>
                                </div>

                                <div className="para">
                                    <p>
                                        🤝<span>Community Of Explorers:</span>  Join a vibrant community of fellow explorers
                                        who share a passion for discovery. Swap stories,
                                        exchange tips, and connect with like-minded
                                        individuals who understand the transformative
                                        power of travel. This isn't just
                                        a project; it's a community-driven
                                        platform where every traveler's 
                                        voice adds to the collective 
                                        symphony of global exploration.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="work_2">

                            <div className="image_1">
                                <img src={WorkImg3} alt="" />
                            </div>

                            <div className="image_2">
                                <img src={WorkImg4} alt="" />
                            </div>

                        </div>

                    </div>

                    <div className="work_3">

                        <div className="title">
                            <h4>More Projects</h4>
                        </div>

                        <div className="images">
                            {
                                Works?.map(work => (
                                    <div className="work" key={work.id}>
                                        <div className="work_img">
                                            <img src={work.img} />
                                        </div>
                                        <div className="text">
                                            <p>{work.text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>

            </div>
        
        </div>
    </>

}

export default Project;