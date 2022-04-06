import React, { FC } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { TProducts } from "../../redux/slices/products";
import CartHeader from "./CartHeader/CartHeader";
import './CartPage.scss';

const CartPage: FC = () => {
  const { cart } = useAppSelector(state => state.cart)
  const history = useHistory()

  const productsCount: { [key: string]: number } = {};

  cart.forEach((product: TProducts) => {
    if (!productsCount[product.id]) {
      productsCount[product.id] = 0;
    }
    productsCount[product.id]++;
  })

  const cartProducts = Object.keys(productsCount).map((productId) => {
    const findedProduct = cart.find((product: TProducts) => product.id === Number(productId));
    return {
      ...findedProduct,
      quantity: productsCount[productId]
    }
  })
  
  const cartPrices = cartProducts.map((product: TProducts) => {
    return product.price * product.quantity
  })
  const totalPrice = cartPrices.reduce((prev, next) => prev + next, 0).toFixed(2)
  
  const renderedCartProducts = cartProducts.map((product: TProducts) => {
    return (
      <div className="cart-product__container" key={product.id}>

        <div className="cart-product__img-title">
          <img className="cart-product__img" src={product.image} alt="product" />
          <p className="cart-product__title">{product.title}</p>
        </div>
        <div className="cart-product__description">
          {product.description}
        </div>
        <div className="cart-product__qty">
          {product.quantity}
        </div>
        <div className="cart-product__price">
          {product.price}
        </div>

      </div>
    )
  })

  const orderBtnHandler = (e: React.MouseEvent) => {
    history.push('/order')
  }

  return (
    <div className="cart__container">
      {cartProducts.length > 0 ? <CartHeader /> : <div className="empty-cart">Cart is empty!</div> }
      {renderedCartProducts}
      {cartProducts.length > 0 ? <div className="total-price">Total price: {totalPrice}</div> : ''}
      {cartProducts.length > 0 ? 
        <div className="order-btn" >
          <button className="checkout-btn" onClick={orderBtnHandler}>Go to checkout</button>
        </div> : ''
      }
    </div>
  )
}

export default CartPage;