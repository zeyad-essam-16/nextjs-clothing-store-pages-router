import React from "react";

import ProductsList from "../../../components/products/ProductsList";

import { getFilteredProducts } from "../../../lib/db";

const ShoesPage = ({ products, sizes }) => {
  return (
    <ProductsList products={products} title="Shoes & slippers" sizes={sizes} />
  );
};

export default ShoesPage;

export async function getStaticProps() {
  const { products, sizes } = await getFilteredProducts({ category: "shoes" });
  return {
    props: {
      products,
      sizes,
    },
  };
}
