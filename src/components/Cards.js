import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/women-cardigans.jpg'
              label='CARDIGANS'
              path='/women/cardigans'
            />
            <CardItem
              src='images/women-dresses.jpg'
              label='DRESSES'
              path='/women/dresses'
            />
            <CardItem
              src='images/women-cardigans.jpg'
              label='CARDIGANS'
              path='/women/cardigans'
            />
            <div className="women_cards__item__title">
              WOMEN
            </div>
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/men-turtleneck.jpg'
              label='TURTLENECK'
              path='/men/turtleneck'
            />
            <CardItem
              src='images/men-polo.jpg'
              label='POLO'
              path='/men/polo'
            />
            <CardItem
              src='images/men-turtleneck.jpg'
              label='TURTLENECK'
              path='/men/turtleneck'
            />
            <div className="men_cards__item__title">
              MEN
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;