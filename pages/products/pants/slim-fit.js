import React from "react";

import ProductsList from "../../../components/products/ProductsList";

import { getFilteredProducts } from "../../../lib/db";

const JeansSlimFitPage = ({ products, sizes }) => {
  return (
    <ProductsList products={products} title="Slim Fit Pants" sizes={sizes} />
  );
};

export default JeansSlimFitPage;

export async function getStaticProps() {
  const { products, sizes } = await getFilteredProducts({
    category: "pants",
    type: "slim-fit",
  });
  return {
    props: {
      products,
      sizes,
    },
  };
}
