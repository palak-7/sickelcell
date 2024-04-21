import Banner from "@/components/homepage/Banner";
import Brands from "@/components/homepage/Brands";
import Connect from "@/components/homepage/Connect";
import News from "@/components/homepage/News";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Connect />
      <News />
      <Brands />
    </div>
  );
};

export default page;
