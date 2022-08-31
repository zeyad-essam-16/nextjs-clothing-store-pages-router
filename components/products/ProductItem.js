import React from "react";

import Link from "next/link";

import classes from "./ProductItem.module.css";
import ItemImageSwiper from "./ItemImageSwiper";

const ProductItem = ({ product }) => {
  const productPrice = +product.price;
  return (
    <li className={classes.product_item}>
      <Link href={`/product-details/${product.slug}`}>
        <a>
          <div className={classes.image_wrapper}>
            <ItemImageSwiper images={product.images} />
          </div>
          <div className={classes.item_info}>
            <h3>{product.title}</h3>
            <span>{productPrice.toFixed(2)} EGP</span>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default ProductItem;
