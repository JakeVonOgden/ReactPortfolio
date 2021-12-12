import React from 'react';
import pokedex from '../../../assets/Pokedex.png';

const Pokedex = (props) => {
    return (
        <>
        <section className='project-cs-hero'>
           <div className='project-cs-hero__content'>
               <div className='title-wrapper'>
                   <div className='projects-cs-hero__row-img-cont'>
                        <img className='projects-cs-hero__row-img' src={pokedex} alt='pokedex' />
                   </div>
                </div>
                <div className='links-wrapper'>
                    <h1 className='heading-primary'>Pokedex App</h1>
                    <a href='https://jakevonogden.github.io/Pokedex/' rel='noreferrer' target='_blank' className='btn btn--bg'>Live Link</a>
                    <a href='https://github.com/JakeVonOgden/Pokedex' rel='noreferrer' target='_blank' className='btn btn--bg'>See Code</a>
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
                                This an App that displays all the current pokemon in existance and allows you to click them to get more information about them individually.
                                It utilizes the Poke-API to display this data in a neat and modular fashion.
                            </p>
                            <p className='project-details__content-para'>
                                I challenged myself to use multiple API calls and display a lot of data in a neat and minimal user interface. My goal was a seemless user experience.
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
                                <div className='skills__skill'>Poke-Api</div>
                            </div>
                        </div>
                        <div className='project-details__links'>
                            <h2 className='project-details__content-title'>See Live</h2>
                            <a href='https://jakevonogden.github.io/Pokedex/' className='btn btn--med btn--theme project-details__links-btn' target='_blank' rel='noreferrer'>Live Link</a>
                            <a href='#projects' className='btn btn--med btn--theme-inv project-details__links-btn' onClick={props.viewMain}>Go Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Pokedex;
