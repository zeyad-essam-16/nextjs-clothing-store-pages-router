import React, { useEffect, useState } from "react";

import ProductItem from "./ProductItem";
import ProductsFilters from "./ProductsFilters";

import classes from "./ProductsList.module.css";

const ProductsList = ({ products, title, sizes }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterSize, setFilterSize] = useState(null);

  const selectFilterSize = (size) => {
    setFilterSize(size);
  };
  const resetFilterSize = () => {
    setFilterSize(null);
  };

  useEffect(() => {
    if (filterSize) {
      let filteredProducts = products.filter((product) =>
        product.availableSizes.includes(filterSize)
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [filterSize]);

  return (
    <div className={classes.product_list}>
      <div className={classes.products_info}>
        <div className={classes.info_inner}>
          <h2>{title}</h2>
          <span className={classes.count}>{products.length} Products</span>
        </div>
      </div>
      <ProductsFilters
        sizes={sizes}
        selectFilterSize={selectFilterSize}
        resetFilterSize={resetFilterSize}
        filterSize={filterSize}
      />
      <ul className={classes.list_wrapper}>
        {filteredProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
        {products.length === 0 && <h3>No Items Found</h3>}
      </ul>
    </div>
  );
};

export default ProductsList;
