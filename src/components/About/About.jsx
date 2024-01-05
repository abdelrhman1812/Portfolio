import React from 'react'
export default function About() {
    return <>


        <section className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p> Innovative and detail-oriented Fresher Front End Developer with a passion for creating responsive and user-friendly websites.
                        Skilled in collaborating with back-end developers, utilizing version control systems, and staying up-to-date on emerging technologies. Proven track record in improving website traffic, performance, and functionality through the implementation of front-end coding standards and troubleshooting. I enjoy being challenged and engaging with projects that require
                        me to work outside my comfort and knowledge set, as continuing to learn new languages and development
                        techniques is important to me and the success of any organization...</p>
                </div>

                <div className="row">

                    <div className="col-lg-4" >
                        <figure>
                            <img src={require('../../Assets/images/Sidebar/Abdelrhman.jpeg')} alt="" />
                        </figure>
                    </div>

                    <div className="col-lg-8 pt-4 pt-lg-0 content" >
                        <h3>Front-End Developer.</h3>
                        <p className="fst-italic">
                            Front-End Developer | React Developer
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="fa fa-arrow-circle-right"></i> <strong>Birthday:</strong> <span>18 Decamber 1999</span></li>
                                    <li><i className="fa fa-arrow-circle-right"></i> <strong>Phone:</strong> <span>01008034761</span></li>
                                    <li><i className="fa fa-arrow-circle-right"></i> <strong>City:</strong> <span>Mansoura</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="fa fa-arrow-circle-right"></i> <strong>Email:</strong>
                                        <span>
                                            <a href="mailto:abdelrhmanali1812@gmail.com" className="text-black">abdelrhmanali1812@gmail.com</a>
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-arrow-circle-right"></i> <strong>Github:</strong>
                                        <span><a href="https://github.com/abdelrhman1812"
                                            className="text-black">https://github.com/abdelrhman1812</a></span>
                                    </li>

                                    <li>
                                        <i className="fa fa-arrow-circle-right"></i>
                                        <strong>CV:</strong>
                                        <span>
                                            <a href="https://drive.google.com/file/d/1ug7AefXV94oVKRxWwHhbviUh7-mu9dHX/view?usp=sharing"
                                                className="text-black">Show CV</a>
                                        </span>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    </>

}
