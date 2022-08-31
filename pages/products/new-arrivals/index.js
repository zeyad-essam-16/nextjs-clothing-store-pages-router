import React from "react";

import ProductsList from "../../../components/products/ProductsList";

import { getFilteredProducts } from "../../../lib/db";

const NewArrivalsPage = ({ products, sizes }) => {
  return (
    <ProductsList products={products} title="New Arrivals" sizes={sizes} />
  );
};

export default NewArrivalsPage;

export async function getStaticProps() {
  const { products, sizes } = await getFilteredProducts({ newArrival: true });
  return {
    props: {
      products,
      sizes,
    },
  };
}
