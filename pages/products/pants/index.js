import React from "react";

import ProductsList from "../../../components/products/ProductsList";

import { getFilteredProducts } from "../../../lib/db";

const JeansPage = ({ products, sizes }) => {
  return <ProductsList products={products} title="pants" sizes={sizes} />;
};

export default JeansPage;

export async function getStaticProps() {
  const { products, sizes } = await getFilteredProducts({ category: "pants" });
  return {
    props: {
      products,
      sizes,
    },
  };
}
