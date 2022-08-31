import React from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const ItemImageSwiper = ({ images }) => {
  return (
    <Swiper
      className="item_swiper"
      navigation={true}
      scrollbar={{
        hide: false,
      }}
      modules={[Navigation, Scrollbar]}
      centeredSlides={true}
      slidesPerView={1}
      spaceBetween={5}
      breakpoints={{
        992: {
          scrollbar: false,
          allowTouchMove: false,
        },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            width={656}
            height={656}
            alt="product image"
            layout="responsive"
            objectFit="contain"
            placeholder="blur"
            blurDataURL="/products/image_placeholder.png"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ItemImageSwiper;
