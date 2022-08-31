import React, { useEffect } from "react";
import Image from "next/image";

import disableScroll from "disable-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { IoCloseOutline } from "react-icons/io5";

import classes from "./ImagesModal.module.css";

const ImagesModal = ({ images, onClose, imageIndex }) => {
  useEffect(() => {
    disableScroll.on();
    return () => {
      disableScroll.off();
    };
  }, []);

  return (
    <div className={classes.images_modal}>
      <div className={classes.swiper_wrapper}>
        <Swiper
          initialSlide={imageIndex - 1}
          allowTouchMove={false}
          className="images_modal_swiper"
          navigation={true}
          modules={[Navigation]}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={5}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={classes.image_Wrapper}>
                <TransformWrapper
                  centerZoomedOut={true}
                  maxScale={2.5}
                  doubleClick={{
                    mode: "reset",
                  }}
                >
                  <TransformComponent>
                    <Image
                      src={image}
                      alt="product image"
                      layout="fill"
                      objectFit="contain"
                      priority={true}
                    />
                  </TransformComponent>
                </TransformWrapper>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={classes.close_icon}>
        <i onClick={onClose}>
          <IoCloseOutline />
        </i>
      </div>
    </div>
  );
};

export default ImagesModal;
