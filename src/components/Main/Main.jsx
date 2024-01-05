import React from 'react'
import About from '../About/About'

import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'
import Skills from '../Skills/Skills'

function Main() {
    return <>
        <div className="main">

            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
        </div>

    </>
}

export default Main