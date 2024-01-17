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
                        <Link to="https://meta-blog-project.onrender.com" target="_blank">
                            <img src= {WorkImg1} alt="" />
                        </Link>
                    </div>

                    <div className="desc">

                        <div className="title">
                            <h4>Demo-Blog Project</h4>
                        </div>

                        <div className="para">
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Urna feugiat maecenas eu imperdiet 
                                varius nec pulvinar sem ultrices. 
                                Adipiscing viverra mauris, nunc 
                                nisl sociis dui. Sagittis, curabitur
                                 libero urna interdum metus.
                            </p>
                        </div>

                    </div>

                </div>


            

                <div className="creation">

                    <div className="work_1_2">

                        <div className="work_1">

                            <div className="work_image">
                                <Link>
                                    <img src={WorkImg2} alt="" />
                                </Link>
                            </div>

                            <div className="desc">

                                <div className="title">
                                    <h4>Travel-Tour Project</h4>
                                </div>

                                <div className="para">
                                    <p>Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit. 
                                        Urna feugiat maecenas eu imperdiet 
                                        varius nec pulvinar sem ultrices. 
                                        Adipiscing viverra mauris, nunc 
                                        nisl sociis dui. Sagittis, curabitur
                                        libero urna interdum metus.
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