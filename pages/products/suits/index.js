import React from "react";

import ProductsList from "../../../components/products/ProductsList";

import { getFilteredProducts } from "../../../lib/db";

const SuitsPage = ({ products, sizes }) => {
  return <ProductsList products={products} title="Suits" sizes={sizes} />;
};

export default SuitsPage;

export async function getStaticProps() {
  const { products, sizes } = await getFilteredProducts({ category: "suits" });
  return {
    props: {
      products,
      sizes,
    },
  };
}
