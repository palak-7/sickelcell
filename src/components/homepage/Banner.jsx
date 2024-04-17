"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function Banner() {
  let sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  const data = [
    {
      name: `MasterClass: Global Implication of Gene Therapy`,
      img: "/banner/bg1.jpg",
      url: "services/Content-Marketing",
    },
    {
      name: `Search Engine Optimization`,
      img: "/banner/bg2.jpg",
      url: "services/SEO",
    },
  ];

  return (
    <div className="overflow-x-clip lg:mt-[150px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <div>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={d.name}
              className="relative -mt-20 h-[480px] w-screen rounded-sm"
            >
              <img
                src={d.img}
                alt=""
                className="w-full"
                style={{ height: "480px" }}
              />
              {index === currentSlide && (
                <div
                  className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${
                    index === currentSlide
                      ? "animate__animated animate__slideInDown"
                      : ""
                  }`}
                >
                  <h1
                    className={`text-center text-6xl font-serif font-bold bg-white p-2 bg-opacity-70`}
                  >
                    {d.name}
                  </h1>
                </div>
              )}

              {index === currentSlide && (
                <div
                  className={`absolute top-28 left-0 w-full h-full flex items-center justify-center ${
                    index === currentSlide
                      ? "animate__animated animate__slideInUp"
                      : ""
                  }`}
                >
                  <button className={`p-3 shadow-2xl bg-primary text-white`}>
                    Learn More
                  </button>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
