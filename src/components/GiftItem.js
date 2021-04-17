import React from 'react';
import { Link } from 'react-router-dom';

function GiftItem(props) {
  return (
    <>
      <li className='gifts__item'>
        <Link className='gifts__item__link' to={props.path}>
          <figure className='gifts__item__pic-wrap' data-category={props.label}>
            <img
              className='gifts__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='gifts__item__info'>
            <h5 className='gifts__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default GiftItem;