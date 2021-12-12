import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section id='contact' className='contact sec-pad dynamicBg'>
          <div className='main-container'>
              <h2 className='heading heading-sec heading-sec__mb-med'>
                  <span className='heading-sec__main heading-sec__main--lt'>Contact</span>
                  <span className='heading-sec__sub heading-sec__sub--lt'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</span>
              </h2>
              <div className='contact__form-container'>
                  <form action='#' className='contact__form' method='post'>
                      <input type='hidden' name='form-name' value='form 1' />
                      <div className='contact__form-field'>
                        <label className='contact__form-label' for='name'>Name</label>
                        <input required placeholder='Enter Your Name' type='text' className='contact__form-input' name='name' id='name' />
                      </div>
                      <div className='contact__form-field'>
                        <label className='contact__form-label' for='email'>Email</label>
                        <input required placeholder='Enter Your Email' type='text' className='contact__form-input' email='email' id='email' />
                      </div>
                      <div className='contact__form-field'>
                        <label className='contact__form-label' for='message'>Message</label>
                        <textarea required cols='30' rows='10' placeholder='Enter Your Message' className='contact__form-input' message='message' id='message'></textarea>
                      </div>
                      <button type='submit' className='btn btn--theme contact__btn'>Submit</button>
                  </form>
              </div>
          </div>
        </section>
    )
}

export default Contact;