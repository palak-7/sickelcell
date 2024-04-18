import React from "react";
import Admin from "./Admin";
const page = ({ params }) => {
  const id = params.id;
  const mail = process.env.ADMIN_EMAIL;
  return (
    <div>
      <Admin adminMail={mail} />
    </div>
  );
};

export default page;
