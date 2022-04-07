import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setTotalPrice, descreaseProductQty, increaseProductQty } from "../../redux/slices/cart";
import { TProducts } from "../../redux/slices/products";
import CartHeader from "./CartHeader/CartHeader";
import './CartPage.scss';

const CartPage: FC = () => {
  const dispath = useAppDispatch();
  const { cart, totalPrice } = useAppSelector(state => state.cart)
  const history = useHistory()
 
  const cartPrices = cart.map((product: TProducts) => {
    return product.price * product.quantity
  })

  useEffect(() => {
    dispath(setTotalPrice(cartPrices.reduce((prev, next) => prev + next, 0).toFixed(2)))
  }, [cart])

  const renderedCartProducts = cart.map((product: TProducts) => {
    return (
      <div className="cart-product__container" key={product.id} >

        <div className="cart-product__img-title">
          <img className="cart-product__img" src={product.image} alt="product" />
          <p className="cart-product__title">{product.title}</p>
        </div>
        <div className="cart-product__description">
          {product.description}
        </div>
        <div className="cart-product__qty">
          <button className="qty__btn" onClick={() => dispath(descreaseProductQty(product))}>-</button>
          <span className="qty">{product?.quantity}</span> 
          <button className="qty__btn" onClick={() => dispath(increaseProductQty(product))}>+</button>
        </div>
        <div className="cart-product__price">
          {(product.price * product.quantity).toFixed(2)}
        </div>

      </div>
    )
  })

  const orderBtnHandler = (e: React.MouseEvent) => {
    history.push('/order')
  }

  return (
    <div className="cart__container">
      {cart.length > 0 ? <CartHeader /> : <div className="empty-cart">Cart is empty!</div> }
      {renderedCartProducts}
      {cart.length > 0 ? <div className="total-price">Total price: {totalPrice}</div> : ''}
      {cart.length > 0 ? 
        <div className="order-btn" >
          <button className="checkout-btn" onClick={orderBtnHandler}>Place an order</button>
        </div> : ''
      }
    </div>
  )
}

export default CartPage;