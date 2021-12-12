import React from 'react';
import gpt3 from '../../../assets/GPT3.png';

const GPT3 = (props) => {
    return (
        <>
          <section className='project-cs-hero'>
           <div className='project-cs-hero__content'>
               <div className='title-wrapper'>
                   <div className='projects-cs-hero__row-img-cont'>
                        <img className='projects-cs-hero__row-img' src={gpt3} alt='pokedex' />
                   </div>
                </div>
                <div className='links-wrapper'>
                    <h1 className='heading-primary'>GPT3 Layout</h1>
                    <a href='GPT3 Live: https://jakevonogden.github.io/Modern-React-UI-UX-Study/' rel='noreferrer' target='_blank' className='btn btn--bg'>Live Link</a>
                    <a href='https://github.com/JakeVonOgden/Modern-React-UI-UX-Study' rel='noreferrer' target='_blank' className='btn btn--bg'>See Code</a>
                </div>
           </div>
        </section>
        <section className='project-details'>
            <div className='main-container'>
                <div className='project-details__content'>
                    <div className='project-details__content-main'>
                        <div className='project-details__desc'>
                            <h2 className='project-details__content-title'>Project Overview</h2>
                            <p className='project-details__content-para'>
                              This design was not made by me, but I did build it from scratch. My goal was to learn more about building beatiful responsive websites. It utlizes React with custom CSS.
                            </p>
                            <p className='project-details__content-para'>
                              I re-created this website and learned about responsive design throughout the build process. It was a big step for me in upgrading my design and presentation skills.
                            </p>
                            <p className='project-details__content-para'>
                                Feel free to check out the Project by visiting the Live Link.
                            </p>
                        </div>
                        <div className='project-details__tools-used'>
                            <h2 className='project-details__content-title'>Tools Used</h2>
                            <div className='skills'>
                                <div className='skills__skill'>HTML</div>
                                <div className='skills__skill'>CSS</div>
                                <div className='skills__skill'>JavaScript</div>
                                <div className='skills__skill'>React</div>
                            </div>
                        </div>
                        <div className='project-details__links'>
                            <h2 className='project-details__content-title'>See Live</h2>
                            <a href='https://jakevonogden.github.io/Modern-React-UI-UX-Study/' className='btn btn--med btn--theme project-details__links-btn' target='_blank' rel='noreferrer'>Live Link</a>
                            <a href='#projects' className='btn btn--med btn--theme-inv project-details__links-btn' onClick={props.viewMain}>Go Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        </>
    )
}

export default GPT3;