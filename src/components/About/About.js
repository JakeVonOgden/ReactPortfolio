import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id='about' className='about sec-pad'>
            <div className='main-container'>
                <h2 className='heading heading-sec heading-sec__mb-med'>
                    <span className='heading-sec__main'> About Me </span>
                    <span className='heading-sec__sub'> Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
                </h2>
                <div className='about__content'>
                    <div className='about__content-main'>
                        <h3 className='about__content-title'>Get to know me!</h3>
                        <div className='about__content-details'>
                            <p className='about__content-details-para'>
                                I'm a <strong>Frontend Web Developer</strong> building the Front-end of websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
                            </p>
                            <p className='about__content-details-para'>
                                I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a rel='noreferrer' href='https://www.linkedin.com/in/jacob-von-ogden-b3b191219/' target='_blank'>Linekedin</a> where I post useful content related to Web Development and Programming.
                            </p>
                            <p className='about__content-details-para'>
                                I'm open to <strong>Job</strong> oppurtunities where i can contribute, learn and grow. If you have a good oppurtunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
                            </p>
                        </div>
                        <a href='/#contact'className='btn btn--med btn--theme dynamicBgClr'>Contact</a>
                    </div>
                    <div className='about__content-skills'>
                        <h3 className='about__content-title'>My Skills</h3>
                        <div className='skills'>
                            <div className='skills__skill'>HTML</div>
                            <div className='skills__skill'>CSS</div>
                            <div className='skills__skill'>JavaScript</div>
                            <div className='skills__skill'>PostgreSQL</div>
                            <div className='skills__skill'>Express</div>
                            <div className='skills__skill'>React</div>
                            <div className='skills__skill'>Node</div>
                            <div className='skills__skill'>Bootstrap</div>
                            <div className='skills__skill'>GIT</div>
                            <div className='skills__skill'>Github</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

                            




