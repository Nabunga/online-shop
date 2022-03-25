import React, { FC } from "react";
import './Header.scss';
import logo from '../../assets/logo/logo.png';
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className="app-header">
      <img className="app-header__logo" src={logo} alt="logo" />
      <nav className="app-header__menu-items">
        <ul className="app-header__list">
          <li>
            <Link className="app-header__list-item" to='/'>Home</Link>
          </li>
          <li className="cart-special">
            <span className="cart-qty">1</span>
            <Link className="app-header__list-item" to='/cart'>Cart</Link>
          </li>
          <li>
            <Link className="app-header__list-item" to='/order'>Order</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;