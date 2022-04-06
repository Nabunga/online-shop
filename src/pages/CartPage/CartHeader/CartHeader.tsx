import React, { FC } from "react";
import './CartHeader.scss';

const CartHeader: FC = () => {
  return (
    <div className="cart__header">
      <div className="cart__header-title">
        Product
      </div>
      <div className="cart__header-description">
        Description
      </div>
      <div className="cart__header-qty">
        Quantity
      </div>
      <div className="cart__header-price">
        Price
      </div>
    </div >
  )
}

export default CartHeader;