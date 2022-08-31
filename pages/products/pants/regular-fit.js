import React from "react";

import ProductsList from "../../../components/products/ProductsList";

import { getFilteredProducts } from "../../../lib/db";

const JeansRegularFitPage = ({ products, sizes }) => {
  return (
    <ProductsList products={products} title="Regular Fit Pants" sizes={sizes} />
  );
};

export default JeansRegularFitPage;

export async function getStaticProps() {
  const { products, sizes } = await getFilteredProducts({
    category: "pants",
    type: "regular-fit",
  });
  return {
    props: {
      products,
      sizes,
    },
  };
}
