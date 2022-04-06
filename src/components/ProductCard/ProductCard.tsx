import React, { FC } from "react";
import { Rating } from "@mui/material";
import './ProductCard.scss';

interface ProductCardState {
  title: string;
  image: string;
  price: number;
  rating: number;
  onClick: any
}

const ProductCard: FC<ProductCardState> = ({ title, image, price, rating, onClick }) => {
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