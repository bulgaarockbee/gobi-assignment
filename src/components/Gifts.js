import React from 'react';
import './Gifts.css';
import GiftItem from './GiftItem';

function Gifts() {
  return (
    <div className='gifts'>
      <div className='gifts__container'>
        <div className='gifts__wrapper'>
          <ul className='gifts__items'>
            <GiftItem
              src='images/gift-5.jpg'
              text='Écharpe tiseé avec bords contrastants et franges'
              path='/'
            />
            <GiftItem
              src='images/gift-6.jpg'
              label='DRESSES'
              text='Écharpe tiseé avec bords contrastants et franges'
              path='/'
            />
            <GiftItem
              src='images/gift-7.jpg'
              text='Кардиган в Стиле Колор-Блок с V-Образным Воротником'
              path='/'
            />
            <GiftItem
              src='images/gift-8.jpg'
              text='Кардиган в Стиле Колор-Блок с V-Образным Воротником'
              path='/'
            />
          </ul>
          <ul className='gifts__items'>
            <GiftItem
              src='images/gift-1.jpg'
              text='Écharpe tiseé avec bords contrastants et franges'
              path='/'
            />
            <GiftItem
              src='images/gift-2.jpg'
              label='DRESSES'
              text='Écharpe tiseé avec bords contrastants et franges'
              path='/'
            />
            <GiftItem
              src='images/gift-3.jpg'
              text='Écharpe tiseé avec bords contrastants et franges'
              text='Кардиган в Стиле Колор-Блок с V-Образным Воротником'
              path='/'
            />
            <GiftItem
              src='images/gift-4.jpg'
              text='Кардиган в Стиле Колор-Блок с V-Образным Воротником'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gifts;