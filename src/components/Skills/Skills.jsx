import React from 'react'
import C from '../../Assets/images/skills/ISO_C++_Logo.svg.png'
import BS from '../../Assets/images/skills/bootstrap.png'
import CSS from '../../Assets/images/skills/css.1b9dcc2e.svg'
import Git from '../../Assets/images/skills/git.svg'
import HTML from '../../Assets/images/skills/html5.a7362949.svg'
import JS from '../../Assets/images/skills/javascript.455da02c.svg'
import JQ from '../../Assets/images/skills/jquery.svg'
import Next from '../../Assets/images/skills/next.svg'
import Postgres from '../../Assets/images/skills/postgresql-icon.png'
import react from '../../Assets/images/skills/react.svg'
import SASS from '../../Assets/images/skills/sass.svg'
import SQL from '../../Assets/images/skills/sql-database-sql-azure-icon-1955x2048-4pmty46t.png'
import TypeScript from '../../Assets/images/skills/typescript.svg'
export default function Skills() {
    return <>

        <section className='skills'>

            <div className='container'>
                <h2>My Tech Stack & Tools</h2>
                <span className='heading'>
                    I am a self-taught frontend developer, Creating web pages and web applications is my passion. I am looking forward to being the kind of assistant you need to make your business flourish.
                </span>





                <div className="row g-5 mt-5">

                    {/* HTML */}
                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={HTML} alt="HTML" />   </figure>
                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>HTML</figcaption>
                        </div>
                    </div>

                    {/* css */}
                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={CSS} alt="css" /> </figure>
                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>CSS</figcaption>
                        </div>
                    </div>

                    {/* bootstrap */}

                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={BS} alt="BOOTSTRAP" />     </figure>
                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>Bootstrap</figcaption>
                        </div>
                    </div>

                    {/* SASS */}
                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={SASS} alt="sass" /> </figure>
                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>SASS</figcaption>
                        </div>
                    </div>

                    {/* JS */}

                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={JS} alt="js" />          </figure>

                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>JS</figcaption>
                        </div>
                    </div>

                    {/* JQuery */}

                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={JQ} alt="Jq" />  </figure>

                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>JQuery</figcaption>
                        </div>
                    </div>

                    {/* React.js */}
                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={react} alt="React.js" />     </figure>

                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>React.js</figcaption>
                        </div>
                    </div>


                    {/* Next.js */}
                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={Next} alt="next.js" /></figure>

                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>Next.js</figcaption>
                        </div>
                    </div>

                    {/* TypeScript  */}
                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={TypeScript} alt="TypeScript" />   </figure>

                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>TypeScript</figcaption>
                        </div>
                    </div>


                    {/* GitHub  */}
                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={Git} alt="GitHub" />    </figure>

                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>GitHub</figcaption>
                        </div>
                    </div>

                    {/* SQL */}
                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={SQL} alt="SQL" /></figure>

                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>SQL</figcaption>
                        </div>
                    </div>


                    {/*  Postgres  */}
                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={Postgres} alt="Postgres" />      </figure>

                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>Postgres</figcaption>
                        </div>
                    </div>


                    {/* C++ */}

                    <div className="col-md-6 col-lg-4 ">
                        <div className="lang">
                            <div className="loader">
                                <figure>  <img src={C} alt="c++" />   </figure>

                                <div className="loader_cube loader_cube--color"></div>
                                <div className="loader_cube loader_cube--glowing"></div>
                            </div>
                            <figcaption>C++</figcaption>
                        </div>
                    </div>





                </div>
            </div>

        </section >
    </>

}

