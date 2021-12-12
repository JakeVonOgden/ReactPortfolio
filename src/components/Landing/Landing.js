import React from 'react';
import './landing.css';

const Landing = () => {
    return (
        <section id='landing' className='home-hero'>
            <div className='home-hero__content'>
                <h1 className='heading-primary'>Hey, I'm Jacob Von Ogden</h1>
                <div className='home-hero__info'>
                    <p className='text-primary'>
                        I'm a frontend focused web developer living out of Indianapolis, Indiana. I enjoy building everything from small-business sites to rich interactive web apps.
                    </p>
                </div>
                <div className='home-hero__cta'>
                    <a href='#projects' className='btn btn--bg'>Projects</a>
                </div>
            </div>
            <div className='home-hero__socials'>
                <div className='home-hero__social'>
                    <a href='https://www.linkedin.com/in/jacob-von-ogden-b3b191219/' className='home-hero__social-icon-link' rel='noreferrer' target='_blank'>
                        <img src='https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png' alt="Jacob Von Ogden Linkedin" className='home-hero__social-icon' />
                    </a>
                </div>
                <div className='home-hero__social'>
                    <a href='https://github.com/JakeVonOgden' className='home-hero__social-icon-link' rel='noreferrer' target='_blank'>
                        <img src='https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png' alt="Jacob Von Ogden Github" className='home-hero__social-icon' />
                    </a>
                </div>
                <div className='home-hero__social'>
                    <a href='https://twitter.com/JakeVonOgden1' className='home-hero__social-icon-link home-hero__social-icon-link--bd-none' rel='noreferrer' target='_blank'>
                        <img src='https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png' alt="Jacob Von Ogden Twitter" className='home-hero__social-icon' />
                    </a>
                </div>
            </div>
            <a href='#about'>
                <svg class="arrows">
                    <path class="a1" d="M0 0 L30 32 L60 0"></path>
                    <path class="a2" d="M0 20 L30 52 L60 20"></path>
                    <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </a>
        </section>
    )
}

export default Landing;