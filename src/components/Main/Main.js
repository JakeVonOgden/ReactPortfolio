import React from 'react'
import {Landing, About, Projects, Contact} from '../index';

const Main = (props) => {
    return (
        <>
            <Landing />
            <About />
            <Projects viewCaseStudy={props.viewCaseStudy} />
            <Contact />
        </>
    )
}

export default Main
