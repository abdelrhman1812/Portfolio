import emailjs from 'emailjs-com';
import React from 'react';
import { Link } from 'react-router-dom';
import Email from '../../Assets/images/Contact/email.svg';
import Phone from '../../Assets/images/Contact/phone.svg';
export default function Contact() {


    /*  ========== Function to send email ========== */
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_b9k5nol', 'template_us89pmf', e.target, 'RYOyrKWRFVWTDR50M')
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }


    return <>
        <section className="contact" id="contact">



            <div className="container">

                <div className="section-title">
                    <h2>Contact Me</h2>
                    <span className='heading'>Leave me a message & Let's work together</span>
                </div>




                <div className="row" >
                    <div className="col-lg-6 ">
                        {/* Form */}
                        <form onSubmit={sendEmail}>
                            <input type="text" name='name' className='form-control' placeholder='Your Name' />
                            <input type="email" name='email' className='form-control' placeholder='Your Email' />
                            <textarea name="message" className='form-control' placeholder='Tell me how can I help '></textarea>
                            <input type="submit" value="Send Message" />
                        </form>
                    </div>



                    <div className="col-lg-6 ">
                        {/* Get in touch */}
                        <div className="data">
                            <figure>
                                <img src={require('../../Assets/images/Contact/Message.webp')} alt="" />
                            </figure>
                            <h3>Get In Touch</h3>
                            <p>If you have any questions please fill the form and I will get back to you as soon as possible. I look forward to hearing from you.</p>
                            <div className="icons">
                                <ul>
                                    <li>
                                        <Link to={'https://www.linkedin.com/in/abdelrahman-ali-b3a343284/'} target="_blank">

                                            <i className='fa-brands fa-linkedin bg-primary text-white'></i>
                                            <span>Linked In</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={'https://twitter.com/Ody_Ody_1999'} target="_blank">

                                            <i className='fa-brands fa-twitter bg-primary text-white'></i>
                                            <span>Twitter</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={'https://github.com/abdelrhman1812'} target="_blank">

                                            <i className='fa-brands fa-github'></i>
                                            <span>Github</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={'https://wa.me/01061327090?text=welcome'} target="_blank">
                                            <i className='fa-brands fa-whatsapp '></i>
                                            <span>WhatsApp</span>

                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>


                </div>


                {/* contact */}
                <div className="row g-3">
                    {/* Email */}
                    <div className="col-md-6">
                        <div className="item">
                            <figure>
                                <img src={Email} alt="email" />
                            </figure>
                            <figcaption>   Email    </figcaption>
                            <Link to={"mailto:abdelrhmanali1812@gmail.com"}>abdelrhmanali1812@gmail.com</Link>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                        <div className="item">
                            <figure>
                                <img src={Phone} alt="email" />
                            </figure>
                            <figcaption>   Phone   </figcaption>
                            <Link to={"tel:01008034761"} >01008034761</Link>
                        </div>
                    </div>
                </div>
            </div>



            {/* section-banner */}

            <div className="section-banner">
                <div id="star-1">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>

                <div id="star-2">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>

                <div id="star-3">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>

                <div id="star-4">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>

                <div id="star-5">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>

                <div id="star-6">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>

                <div id="star-7">
                    <div className="curved-corner-star">
                        <div id="curved-corner-bottomright"></div>
                        <div id="curved-corner-bottomleft"></div>
                    </div>
                    <div className="curved-corner-star">
                        <div id="curved-corner-topright"></div>
                        <div id="curved-corner-topleft"></div>
                    </div>
                </div>
            </div>
        </section>

    </>

}
