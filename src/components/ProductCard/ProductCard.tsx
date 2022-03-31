import React, { FC } from "react";
import { Rating } from "@mui/material";
import './ProductCard.scss';
import { useAppSelector } from "../../hooks/reduxHooks";
import { TProducts } from '../../redux/slices/products'

interface ProductCardState {
  title: string;
  image: string;
  price: number;
  rating: number;
  onClick: any
}

const ProductCard: FC<ProductCardState> = ({ title, image, price, rating, onClick }) => {

  const { cart } = useAppSelector(state => state.cart)

  const productsCount: {[key: string]: number} = {};

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

  return (
    <div className="column">
      <div className="card">
        <div className="card__image">
          <img src={image} alt="product image" />
        </div>
        <Rating value={rating} precision={0.1} readOnly />
        <div className="card__price">
          Price: {price}
        </div>
        <div className="card__title">
          {title}
        </div>
        <button className="card__btn" onClick={onClick}>Add to card</button>
      </div>
    </div>
  )
}

export default ProductCard;