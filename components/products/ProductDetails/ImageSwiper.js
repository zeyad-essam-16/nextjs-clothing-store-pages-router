import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";

import Image from "next/image";

const ImageSwiper = ({ images, onOpenImage }) => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        centeredSlides={true}
        className="Details_swiper"
        slidesPerView={1}
        spaceBetween={5}
        breakpoints={{
          767: {
            slidesPerView: 2,
            centeredSlides: false,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => {
                onOpenImage(index);
              }}
            >
              <Image
                src={image}
                width={656}
                height={656}
                alt="product image"
                priority={true}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSwiper;
