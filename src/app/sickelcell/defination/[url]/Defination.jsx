"use client";

import React, { useEffect, useState } from "react";
import What from "@/components/sicklecell/defination/What";
import { getDefinitions } from "@/services/getData";

const Defination = ({ url }) => {
  const [content, setContent] = useState([]);
  async function getData() {
    const result = await getDefinitions();
    setContent(result?.result);
  }
  useEffect(() => {
    getData();
  }, []);
  const filteredData = content.filter((item) => item.url === url);
  console.log(filteredData);
  return (
    <div>
      <What content={filteredData} />
    </div>
  );
};

export default Defination;
