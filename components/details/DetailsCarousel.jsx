"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const DetailsCarousel = ({ gallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="min-w-[300px] bg-white p-10 rounded-md shadow-md lg:col-span-2 ">
      <Swiper
        style={{
          marginBottom: "10px",
          "--swiper-navigation-color": "#7d2111",
          "--swiper-pagination-color": "#7d2111",
        }}
        loop={false}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.image_url}
              alt={`Product ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.image_url}
              alt={`Product ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DetailsCarousel;
