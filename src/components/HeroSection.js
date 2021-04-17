import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='images/main-background.jpg' />
      <div className="main-info">
        <h1>SUMMER SALE<br></br>UP TO 60%</h1>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            path='/women/cardigans'
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;