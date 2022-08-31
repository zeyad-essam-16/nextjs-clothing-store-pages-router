import React from "react";

import ProductsList from "../../../components/products/ProductsList";

import { getFilteredProducts } from "../../../lib/db";

const TshirtsPage = ({ products, sizes }) => {
  return <ProductsList products={products} title="T-Shirts" sizes={sizes} />;
};

export default TshirtsPage;

export async function getStaticProps() {
  const { products, sizes } = await getFilteredProducts({
    category: "tops",
    type: "t-shirts",
  });
  return {
    props: {
      products,
      sizes,
    },
  };
}
