import React from 'react'
export default function Services() {
    return <>
        <div className='services'>

            <div className='container'>

                <h2>My Services</h2>
                <span className='heading'>This is what i can do for you</span>
                <div className="row g-5 mt-2">
                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <div className="icon">
                                <i className="fa-solid fa-mobile-screen-button"></i>                            </div>
                            <div className="data">
                                <h3> HTML<span>5</span> /CSS<span>3</span></h3>
                                <p>Responsive Development</p>
                                <span>
                                    Get your desired web page coded into full responsive HTML & CSS page ready to deploy
                                </span>

                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <div className="icon">
                                <i className="fa-solid fa-laptop-code"></i>                            </div>
                            <div className="data">
                                <h3> React</h3>
                                <p>Web App Development</p>
                                <span>
                                    Create your complex web app for your business using React by Next.js framework                                </span>

                            </div>
                        </div>
                    </div>



                    <div className="col-md-6 col-lg-4">
                        <div className="item editing">
                            <div className="icon">
                                <i className="fa-regular fa-images"></i>                            </div>
                            <div className="data">
                                <h3> Editing & Re-design</h3>
                                <span>
                                    Do you have some edits and retouchs or even a complete re-design I am here to do it </span>
                            </div>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    </>

}
