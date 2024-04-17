import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import NewsLetter from "./NewsLetter";
const Footer = () => {
  return (
    <div className="mx-auto w-full p-4 lg:py-8 bg-black bg-opacity-95">
      <NewsLetter />

      <div className="md:flex md:justify-between">
        {/* logo and address */}
        <div className="mb-6 md:mb-0">
          <Link href="/" className="flex justify-center">
            <Image
              src="/logo.png"
              width={280}
              height={100}
              className="lg:w-[100px] lg:h-[100px] w-[200px] h-[70px]"
              alt="Logo"
            />
          </Link>
          <Link
            href="https://maps.app.goo.gl/ZCnmKXvE3Z7sFDEY9"
            target="_blank"
            className="flex ml-3 mb-2 mt-4 hover:underline text-white"
          >
            <FaMapLocationDot className="mr-3 mt-1 text-primary" />
            G-36, First Floor, Outer circle,
            <br /> Connaught place,
            <br /> New Delhi - 110001
          </Link>
          <Link
            href="tel:+919582930940"
            className="flex ml-3 mb-1 hover:underline text-white"
          >
            <FaPhoneAlt className="mr-3 mt-1 text-primary" />
            +91 9582 930 940
          </Link>
          <Link
            href="mailto: info@tekbooster.com"
            className="hover:underline flex ml-3 mb-1 text-white"
          >
            <MdEmail className="mr-3 mt-1 text-primary" />
            info@tekbooster.com
          </Link>
        </div>
        {/* navlinks and services*/}
        <div className="mt-12 md:ml-4 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-white">
          {/* navinks */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">
              Quick Links
            </h2>
            <ul className="font-medium">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* services */}
          <div>
            <h2 className="mb-5 text-sm font-semibold uppercase">What We Do</h2>
            <ul className="font-medium">
              <li className="">
                <Link href="/services/SEO" className="hover:underline">
                  Search Engine Optimization
                </Link>
              </li>
              <li className="">
                <Link
                  href="/services/Web-Development"
                  className="hover:underline"
                >
                  Website development
                </Link>
              </li>
              <li className="">
                <Link href="/services/Branding" className="hover:underline">
                  Branding
                </Link>
              </li>
              <li className="">
                <Link
                  href="/services/Content-Marketing"
                  className="hover:underline"
                >
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between text-white">
        <span className="text-sm sm:text-center ">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            Tek Booster
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
