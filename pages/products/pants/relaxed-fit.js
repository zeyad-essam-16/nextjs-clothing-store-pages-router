import React from "react";

import ProductsList from "../../../components/products/ProductsList";

import { getFilteredProducts } from "../../../lib/db";

const JeansRelaxedFitPage = ({ products, sizes }) => {
  return (
    <ProductsList products={products} title="Relaxed Fit Pants" sizes={sizes} />
  );
};

export default JeansRelaxedFitPage;

export async function getStaticProps() {
  const { products, sizes } = await getFilteredProducts({
    category: "pants",
    type: "relaxed-fit",
  });
  return {
    props: {
      products,
      sizes,
    },
  };
}
