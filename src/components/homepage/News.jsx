"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { getAllNews } from "@/services/getData";
import Link from "next/link";
import Image from "next/image";
const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function getNews() {
      const result = await getAllNews();
      setNews(result?.result);
    }
    getNews();
  }, []);

  const sectionStyle = {
    backgroundImage: 'url("/newsbg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    position: "relative",
  };

  const divStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    top: 0,
    left: 0,
  };
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
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
  return (
    <section style={sectionStyle} className="mt-4 overflow-x-clip">
      <div style={divStyle}></div>
      <h1 className="w-full absolute text-center text-5xl font-serif font-bold text-white">
        News Updates
      </h1>
      <div className="absolute w-full mt-24">
        <Slider {...settings}>
          {news?.map((d, index) => (
            <Link
              key={d.title}
              href="/"
              className="container grid grid-cols-3 gap-2"
            >
              <div className="hover:scale-105 hover:pointer bg-white text-black group-hover:animate-jump group-hover:animate-once group-hover:animate-duration-[4000ms]">
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <Image src="/logo.png" width={100} height={100} />
                  <h1 className="text-xl font-semibold line-clamp-1">
                    {d.title}
                  </h1>
                  <p className="text-gray-700 line-clamp-5">{d.content}</p>
                  <button className="bg-primary text-white p-2">
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default News;
