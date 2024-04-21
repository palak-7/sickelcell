"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
const What = ({ content }) => {
  return (
    <div>
      <div className="overflow-x-clip lg:mt-[150px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
        <Image
          src={content[0]?.image}
          width={400}
          height={100}
          className=" w-full"
          alt="img"
        />
        <h1 className=" font-serif text-primary font-bold text-4xl text-center pt-10 p-4">
          {content[0]?.title}
        </h1>
        <p
          className="container mb-10"
          dangerouslySetInnerHTML={{ __html: content[0]?.content }}
        ></p>
      </div>
    </div>
  );
};

export default What;
