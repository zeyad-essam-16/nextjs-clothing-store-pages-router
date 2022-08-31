import React, { useEffect, useState } from "react";
import Image from "next/image";

import ImageSwiper from "./ImageSwiper";

import SizeSelect from "./SizeSelect";

import AddButton from "./AddButton";

import classes from "./ProductDetails.module.css";
import ImagesModal from "../../UI/ImagesModal";
import { useRouter } from "next/router";

const ProductDetails = ({ product }) => {
  const router = useRouter();

  const [openedImage, setOpenedImage] = useState(null);

  const [selectedSize, setSelectedSize] = useState();

  const [sizeError, setSizeError] = useState(null);

  const productPrice = +product.price;

  const selectSizeHandler = (size) => {
    setSelectedSize(size);
    setSizeError(null);
  };

  const sizeErrorHandler = (val) => {
    setSizeError(val);
  };

  const openImageHandler = (index) => {
    router.query.image = index + 1;
    router.push(router);
  };

  const closeImageHandler = () => {
    router.back();
  };

  useEffect(() => {
    if (!router.query.image && router.query.image !== "") {
      setOpenedImage(null);
    } else setOpenedImage(router.query.image);
  }, [router]);

  return (
    <div className={classes.top_wrapper}>
      <div className={classes.product_details}>
        <div className={classes.products_images}>
          <div className={classes.desktop_images}>
            {product.images.map((image, index) => (
              <div
                key={image}
                className={classes.image_wrapper}
                onClick={() => {
                  openImageHandler(index);
                }}
              >
                <Image
                  alt="product image"
                  width={656}
                  height={656}
                  src={image}
                  objectFit="contain"
                  priority={true}
                />
              </div>
            ))}
          </div>
          <div className={classes.mobile_images}>
            <ImageSwiper
              images={product.images}
              onOpenImage={openImageHandler}
            />
          </div>
        </div>
        <div className={classes.product_info}>
          <span className={classes.art_no}>{product.artNo}</span>
          <h1>{product.title}</h1>
          <span className={classes.product_price}>
            {productPrice.toFixed(2)} EGP
          </span>
          <SizeSelect
            sizes={product.availableSizes}
            onSelect={selectSizeHandler}
            value={selectedSize}
            sizeError={sizeError}
          />
          <AddButton
            product={product}
            selectedSize={selectedSize}
            onSizeError={sizeErrorHandler}
          />
          <p>{product.description}</p>
        </div>
      </div>
      {openedImage && (
        <ImagesModal
          images={product.images}
          onClose={closeImageHandler}
          imageIndex={openedImage}
        />
      )}
    </div>
  );
};

export default ProductDetails;
