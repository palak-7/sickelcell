import React from "react";
import Defination from "./Defination";

const page = ({ params }) => {
  const url = params.url;
  return (
    <div>
      <Defination url={url} />
    </div>
  );
};

export default page;
