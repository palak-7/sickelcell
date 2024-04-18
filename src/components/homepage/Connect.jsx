"use client";

import React from "react";
import Image from "next/image";
import WorldMap from "react-svg-worldmap";
const Connect = () => {
  const data = [
    { country: "cn", value: "1389618778" }, // china
    { country: "in", value: "1311559204" }, // india
    { country: "us", value: "331883986" }, // united states
    { country: "id", value: "264935824" }, // indonesia
    { country: "pk", value: "210797836" }, // pakistan
    { country: "br", value: "210301591" }, // brazil
    { country: "ng", value: "208679114" }, // nigeria
    { country: "bd", value: "161062905" }, // bangladesh
    { country: "ru", value: "141944641" }, // russia
    { country: "mx", value: "127318112" }, // mexico
  ];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 mt-20">
      <div>
        <div className="font-serif lg:text-4xl text-2xl text-primary font-bold text-center">
          Connect With Us
        </div>
        <Image
          src="/connect.jpg"
          width={1000}
          height={1000}
          className="flex justify-center lg:w-full lg:h-[300px] lg:px-20 px-10 pt-6"
        />
      </div>
      <div>
        <div className="font-serif lg:text-4xl text-2xl mt-5 lg:mt-0 text-primary font-bold text-center">
          Organizations in the World
        </div>
        <div className="flex justify-center">
          <WorldMap color="red" size="xl" data={data} />
        </div>
      </div>
    </div>
  );
};

export default Connect;
