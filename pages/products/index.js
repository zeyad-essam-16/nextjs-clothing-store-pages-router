import React from "react";

import ProductsList from "../../components/products/ProductsList";

import { getFilteredProducts } from "../../lib/db";

const allProductsPage = ({ products, sizes }) => {
  return (
    <ProductsList title="All Products" products={products} sizes={sizes} />
  );
};

export default allProductsPage;

export async function getStaticProps() {
  const { products, sizes } = await getFilteredProducts({});
  return {
    props: {
      products,
      sizes,
    },
  };
}
