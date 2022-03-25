import React, { FC } from "react";
import './ProductCard.scss';

interface ProductCardState {
  title: string;
  image: string;
  price: number;
}

const ProductCard: FC<ProductCardState> = ({ title, image, price }) => {
  return (
    <div className="column">
      <div className="card">
        <div className="card__image">
          <img src={image} alt="product image" />
        </div>
        <div className="card__price">
          Price: {price}
        </div>
        <div className="card__title">
          {title}
        </div>
        <button className="card__btn">Add to card</button>
      </div>
    </div>
  )
}

export default ProductCard;