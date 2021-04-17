import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { Button } from './Button';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 900) {
      setButton(false);
    } else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="top-navbar">
        <div className="top-navbar-container">
          <ul className={click ? "nav-menu" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/languages" className="nav-links" onClick={closeMobileMenu}>
                Global - English
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/help/returning"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                RETURNING AN ORDER?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/help/returning"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Click here for more info
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-in"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SIGN IN
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SIGN UP
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/women" className="nav-links" onClick={closeMobileMenu}>
                WOMEN
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/men"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                MEN
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/accessories"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ACCESSORIES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/organic"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ORGANIC
              </Link>
            </li>
          </ul>
          <Link to="/" className="navbar-logo-gobi"
            onClick={closeMobileMenu}>
            GOBI
          </Link>
          <ul className={click ? "nav-menu-search active" : "nav-menu"}>
            <li className="nav-item">
              <div className='input-areas'>
                <form>
                  <input
                    className='footer-input'
                    name='search'
                    placeholder='Search'
                  />
                  <Button buttonStyle='btn--email--submit'><i class="fas fa-search"></i></Button>
                </form>
              </div>
            </li>
          </ul>
          <Link to="/favorites" className="navbar-logo-fav"
            onClick={closeMobileMenu}>
            <i className="far fa-heart"></i>
          </Link>
          <Link to="/cart" className="navbar-logo-cart"
            onClick={closeMobileMenu}>
            <i className="fas fa-shopping-bag"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;