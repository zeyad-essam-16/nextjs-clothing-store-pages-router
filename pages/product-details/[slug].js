import React from "react";

import ProductDetails from "../../components/products/ProductDetails/ProductDetails";

import { connectToDatabase, getFilteredProducts } from "../../lib/db";

const ProductDetailPage = ({ product }) => {
  return <ProductDetails product={product} />;
};

export default ProductDetailPage;

export async function getStaticProps({ params }) {
  const { client, db } = await connectToDatabase();
  const data = await db.collection("products").findOne({ slug: params.slug });
  const productValidData = JSON.parse(JSON.stringify(data));

  return {
    props: {
      product: productValidData,
    },
    // we can revalidate here every num of seconds when project is up
  };
}

export async function getStaticPaths() {
  const { products } = await getFilteredProducts();

  const paths = products.map((product) => ({ params: { slug: product.slug } }));

  return {
    paths,
    fallback: false,
  };
}
