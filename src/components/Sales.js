import React from 'react';
import './Sales.css';
import { Button } from './Button';
import SaleItem from './SaleItem';

function Sales() {
  return (
    <div className='sales'>
      <div className='sales__container'>
        <div className='sales__wrapper'>
          <ul className='sales__items'>
            <div>
              <h1>WINTER SPICE 2020</h1>
              <p>Infusion of summer pieces and cashmere silk blends</p>
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                path='/women/cardigans'
              >
                SHOP NOW
              </Button>
            </div>
            <SaleItem  style="margin-right: 25%;"
              src='images/winter-sale-1.jpg'
            />
            <SaleItem
              src='images/winter-sale-2.jpg'
            />
            <SaleItem
              src='images/winter-sale-3.jpg'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sales;