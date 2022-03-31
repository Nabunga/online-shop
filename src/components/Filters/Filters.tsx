import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setSelectedCategory } from "../../redux/slices/products";
import { fetchProductsByAscend, fetchProductsByDescend } from '../../redux/slices/productsAsyncActions'
import './Filters.scss';

const Filters: FC = () => {
  const dispatch = useAppDispatch()

  const { categories } = useAppSelector(state => state.products);

  const categoryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedCategory(event.target.value))
  }

  const sortPriceByAscendHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchProductsByAscend())
  }

  const sortPriceByDescendHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchProductsByDescend())
  }

  const allCategories = categories.map((category) => {
    return (
      <div className="filter-group" key={category} >
        <label className="filter-group__label" htmlFor={category}>
          <input
            onChange={categoryHandler}
            className="filter-group__input"
            type="radio"
            id={category}
            name="categoryType"
            value={category}
          />
          {category}
        </label>
      </div>
    );
  });

  return (
    <>
    <div className="filters">
      <h2 className="filters__header">Filters</h2>
      <h3 className="filters__by-category">Sort by category</h3>
      <div className="filter-group">
        <label className="filter-group__label" htmlFor="allCategories">
          <input
            onChange={categoryHandler}
            className="filter-group__input"
            type="radio"
            id="allCategories"
            name="categoryType"
            value=""
            defaultChecked
          />
          all
        </label>
      </div>
      {allCategories}

      <h3 className="filters__by-category">Sort by price</h3>
      <div className="filter-group">
        <label className="filter-group__label" htmlFor="sortByPriceAsc">
          <input
            onChange={sortPriceByAscendHandler}
            className="filter-group__input"
            type="radio"
            id="sortByPriceAsc"
            name="sortByPrice"
            value=""
          />
          from min to max
        </label>
      </div>
      <div className="filter-group">
        <label className="filter-group__label" htmlFor="sortByPriceDesc">
          <input
            onChange={sortPriceByDescendHandler}
            className="filter-group__input"
            type="radio"
            id="sortByPriceDesc"
            name="sortByPrice"
            value=""
          />
          from max to min
        </label>
      </div>
    </div>
    
    </>
  )
}

export default Filters;