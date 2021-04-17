import React from 'react';

function SaleItem(props) {
  return (
    <>
      <figure className='sales__item__pic-wrap'>
        <img
          className='sales__item__img'
          alt='Travel Image'
          src={props.src}
        />
      </figure>
    </>
  );
}

export default SaleItem;