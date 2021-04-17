import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe
        </p>
        <p className='footer-subscription-text'>
          Sign up for emails and receive early acces to new arrivals, sales, events + more.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Enter your email address'
            />
            <Button buttonStyle='btn--email--submit'>Submit</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>ABOUT US</h2>
            <Link to='/sign-up'>Our history</Link>
            <Link to='/'>Product Care</Link>
            <Link to='/'>Store Location</Link>
            <Link to='/'>Sustainability</Link>
          </div>
          <div class='footer-link-items'>
            <h2>POLICY</h2>
            <Link to='/'>Shippig & Return Policy</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Impressum</Link>
            <Link to='/'>Return Portal</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>CUSTOMER SERVICE</h2>
            <Link to='/'>General Terms and Conditions</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>News</Link>
            <Link to='/'>FAQ</Link>
          </div>
          <div class='footer-link-items'>
            <h2>CUSTOMER SERVICE</h2>
            <Link to='/'>General Terms and Conditions</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>News</Link>
            <Link to='/'>FAQ</Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            All content Copyright © 2020 GOBI Cashmere
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;