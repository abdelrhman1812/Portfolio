import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Typed from 'typed.js';

export default function Header() {
    const words = useRef(null);

    /*  ========== Typing ========== */

    useEffect(() => {
        const typedElement = words.current
        // console.log(typedElement)
        if (typedElement) {
            const typed_strings = typedElement.getAttribute('data-typed-items').split(',');
            new Typed('.typed', {
                strings: typed_strings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
            });
        }
    }, []);



    return (
        <header>
            <section>
                <small>Welcom to my Protfolio,</small>
                <h1> <strong>Hell I`am</strong> Abdelrhman Ali ,</h1>
                <h2>I am a self-taught frontend developer, Creating web pages and web applications is my passion.
                    I am looking forward to being the kind of assistant you need to make your business flourish.</h2>
                <p>I'm <span ref={words} className="typed" data-typed-items="Front-End Developer"></span></p>
                <div className="icons">
                    <ul>

                        <li>
                            <Link to={'https://www.linkedin.com/in/abdelrahman-ali-b3a343284/'} target="_blank">

                                <i className='fa-brands fa-linkedin bg-primary text-white'></i>
                            </Link>

                        </li>

                        <li>
                            <Link to={'https://twitter.com/Ody_Ody_1999'} target="_blank">

                                <i className='fa-brands fa-twitter bg-primary text-white'></i>
                            </Link>
                        </li>

                        <li>
                            <Link to={'https://github.com/abdelrhman1812'} target="_blank">

                                <i className='fa-brands fa-github'></i>
                            </Link>
                        </li>

                        <li>

                            <Link to={'https://wa.me/01061327090?text=welcome'} target="_blank">
                                <i className='fa-brands fa-whatsapp '></i>
                            </Link>


                        </li>
                    </ul>
                </div>

                {/* Btn */}

                <div className="btns">

                    <ScrollLink
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contact Me
                        <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                            <path
                                clipRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                fillRule="evenodd"
                            ></path>
                        </svg>

                    </ScrollLink>


                    <Link to={'https://fontawesome.com/icons/download?f=classic&s=solid'}>
                        Download Resume
                        <i className="fa-solid fa-download"></i>
                    </Link>



                </div>
            </section>
        </header>
    );
}