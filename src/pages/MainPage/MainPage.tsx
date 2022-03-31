import React, { FC, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  fetchAllCategories,
  fetchAllProducts
} from '../../redux/slices/productsAsyncActions';
import { TProducts } from '../../redux/slices/products';
import Filters from '../../components/Filters/Filters';
import './MainPage.scss';
import { addProductToCart } from '../../redux/slices/cart';

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { products, selectedCategory } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategories());
  }, []);

  const allProducts = products.map((product) => {
    return (
      <ProductCard
        onClick={() => dispatch(addProductToCart(product))}
        key={product?.id}
        title={product?.title}
        image={product?.image}
        price={product?.price}
        rating={product?.rating.rate}
      />
    );
  });

  const prodByCat = products.filter((product: TProducts) => product.category === selectedCategory)

  const filteredProducts = prodByCat.map((product) => {
    return (
      <ProductCard
        onClick={() => dispatch(addProductToCart(product))}
        key={product?.id}
        title={product?.title}
        image={product?.image}
        price={product?.price}
        rating={product?.rating.rate}
      />
    );
  });

  return (
    <>
      <Filters />
      <div className="container">
        {selectedCategory ? filteredProducts : allProducts}
      </div>
    </>
  );
};

export default MainPage;
