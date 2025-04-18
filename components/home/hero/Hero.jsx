"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const slides = [
    {
      image: "/images/hero/hero1.jpg",
      title: "چای‌های مرغوب و درجه یک",
      description: "مجموعه‌ای منتخب از بهترین چای‌های جهان در خدمت شما",
      textPosition: "right"
    },
    {
      image: "/images/hero/hero2.jpg",
      title: "تجربه اصیل چای نوشی",
      description: "لذت نوشیدن چای با آداب سنتی و دم‌آوری حرفه‌ای",
      textPosition: "left"
    },
    {
      image: "/images/hero/hero3.jpg",
      title: "فضایی دلنشین و آرام",
      description: "چای دلخواه خود را در محیطی آرام و صمیمی نوش جان کنید",
      textPosition: "left"
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[700px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className={`absolute inset-0 flex flex-col justify-center px-4 md:px-16 ${slide.textPosition === 'left' ? 'items-start' : 'items-end'}`}>
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ direction: 'rtl' }}>
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-white" style={{ direction: 'rtl' }}>
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
