import React from "react";

import ProductsList from "../../../components/products/ProductsList";

import { getFilteredProducts } from "../../../lib/db";

const TopsPage = ({ products, sizes }) => {
  return <ProductsList products={products} title="Tops" sizes={sizes} />;
};

export default TopsPage;

export async function getStaticProps() {
  const { products, sizes } = await getFilteredProducts({ category: "tops" });
  return {
    props: {
      products,
      sizes,
    },
  };
}
