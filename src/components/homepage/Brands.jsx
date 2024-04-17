"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

function Brands() {
  let sliderRef = useRef(null);

  useEffect(() => {
    sliderRef.slickPlay();
  }, []);

  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
    // rtl: true,
  };

  return (
    <div>
      <h1 className="w-full text-center text-5xl font-serif font-bold text-primary mt-20">
        Check Out Our Sponsers
      </h1>
      <div className="slider-container my-8">
        <Slider
          {...settings}
          ref={(slider) => (sliderRef = slider)}
          arrows={false}
        >
          <div className="-mr-10">
            <Image
              alt="Brand Image"
              src="/brands/brand1.jpg"
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              alt="Brand Image"
              src="/brands/brand2.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="mx-4">
            <Image
              alt="Brand Image"
              src="/brands/brand3.png"
              width={190}
              height={190}
            />
          </div>

          <div className="mx-4">
            <Image
              alt="Brand Image"
              src="/brands/brand4.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="-mr-12">
            <Image
              alt="Brand Image"
              src="/brands/brand5.png"
              width={200}
              height={200}
            />
          </div>
        </Slider>
        <Slider
          {...settings}
          rtl="true"
          ref={(slider) => (sliderRef = slider)}
          arrows={false}
        >
          <div className="-mr-10">
            <Image
              alt="Brand Image"
              src="/brands/brand1.jpg"
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              alt="Brand Image"
              src="/brands/brand2.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="mx-4">
            <Image
              alt="Brand Image"
              src="/brands/brand3.png"
              width={190}
              height={190}
            />
          </div>

          <div className="mx-4">
            <Image
              alt="Brand Image"
              src="/brands/brand4.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="-mr-12">
            <Image
              alt="Brand Image"
              src="/brands/brand5.png"
              width={200}
              height={200}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Brands;
