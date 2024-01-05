import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../../Assets/Data/data'
export default function Projects() {

    console.log(projects)
    return <>

        <div className='projects'>

            <div className='container'>
                <h2>My Projects</h2>
                <span className='heading'>Check out my latest projects</span>
                <div className="row gy-3 mt-5">


                    {projects.map((project) =>

                        <div className=" col-md-6 col-lg-4">
                            <div className="item">
                                <figure>
                                    <img src={project.imgCover} alt={project.title} className='w-100' />
                                </figure>
                                <figcaption>
                                    <p>{project.title}</p>

                                    <div className="links">
                                        <Link to={project.gitHub} target='_blank'>
                                            <i className='fa-brands fa-github'></i>
                                        </Link>

                                        <Link>
                                            <i className='fa fa-eye'></i>
                                        </Link>

                                    </div>
                                </figcaption>
                                <div className="tech">

                                    {project.tech.map((tech) =>
                                        <img src={tech} alt="" />
                                    )}


                                </div>
                            </div>
                        </div>


                    )}















                </div>
            </div>
        </div>

    </>

}
