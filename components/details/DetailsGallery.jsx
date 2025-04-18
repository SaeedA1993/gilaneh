"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const DetailsGallery = ({ gallery }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  };

  return (
    <div className="min-w-[300px] bg-white p-10 rounded-md shadow-sm lg:col-span-2 ">
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
      >
        {gallery.map((image, index) => (
          <div key={index} className="slick-slide">
            <img
              className="slick-slide-image"
              src={image.image_url}
              alt={`Product ${index}`}
            />
          </div>
        ))}
      </Slider>
      <div className="thumbnail-slider-wrap">
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}
        >
          {gallery.map((photo, index) => (
            <div className="slick-slide " key={index}>
              <img
                className="cursor-pointer rounded-md object-cover"
                src={photo.image_url}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DetailsGallery;
