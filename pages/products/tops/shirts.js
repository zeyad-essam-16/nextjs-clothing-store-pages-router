import React from "react";

import ProductsList from "../../../components/products/ProductsList";

import { getFilteredProducts } from "../../../lib/db";

const ShirtsPage = ({ products, sizes }) => {
  return <ProductsList products={products} title="Shirts" sizes={sizes} />;
};

export default ShirtsPage;

export async function getStaticProps() {
  const { products, sizes } = await getFilteredProducts({
    category: "tops",
    type: "shirts",
  });
  return {
    props: {
      products,
      sizes,
    },
  };
}
