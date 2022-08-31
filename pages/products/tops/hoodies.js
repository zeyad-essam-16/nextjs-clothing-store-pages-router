import React from "react";

import ProductsList from "../../../components/products/ProductsList";

import { getFilteredProducts } from "../../../lib/db";

const HoodiesPage = ({ products, sizes }) => {
  return <ProductsList products={products} title="Hoodies" sizes={sizes} />;
};

export default HoodiesPage;

export async function getStaticProps() {
  const { products, sizes } = await getFilteredProducts({
    category: "tops",
    type: "hoodies",
  });
  return {
    props: {
      products,
      sizes,
    },
  };
}
