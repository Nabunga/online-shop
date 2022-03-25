import React, { FC, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import './MainPage.scss';
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchAllProducts } from '../../redux/slices/products'

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  const allProducts = products.map(item => {
    return (
      <ProductCard
        key={item?.id}
        title={item?.title}
        image={item?.image}
        price={item?.price}
      />
    )
  });

  return (
    <div className="container">
      {allProducts}
    </div>
  )
}

export default MainPage;