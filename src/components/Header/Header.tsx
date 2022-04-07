import React, { FC } from "react";
import './Header.scss';
import logo from '../../assets/logo/logo.png';
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { TProducts } from "../../redux/slices/products";

const Header: FC = () => {
  const { cart } = useAppSelector(state => state.cart)

  const qtyArr = cart.map((product: TProducts) => product.quantity).reduce((prev,next) => prev + next, 0)
  
  return (
    <div className="app-header">
      <img className="app-header__logo" src={logo} alt="logo" />
      <nav className="app-header__menu-items">
        <ul className="app-header__list">
          <li>
            <Link className="app-header__list-item" to='/'>Home</Link>
          </li>
          <li className="cart-special">
            <span className={cart.length !== 0 ? "cart-qty" : "cart-qty_hidden"}>{qtyArr}</span>
            <Link className="app-header__list-item" to='/cart'>Cart</Link>
          </li>
          <li>
            <Link className={cart.length !== 0 ? "app-header__list-item" : "app-header__list-item list-item_disabled"} to='/order'>Order</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;