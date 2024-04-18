"use client";

import React, { useEffect, useContext, useState } from "react";
import { getRequests } from "@/services/getData";
import { acceptRequest, deleteRequest } from "@/services/requests";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const Admin = ({ adminMail }) => {
  const context = useContext(UserContext);
  const router = useRouter();
  const [pending, setPending] = useState([]);
  const getData = async () => {
    const response = await getRequests();
    if (response.success) {
      setPending(response.result);
    }
  };
  useEffect(() => {
    if (context?.user?.email !== adminMail) {
      router.push("/");
    } else {
      getData();
    }
  }, []);
  const handleAccept = async (id) => {
    const data = pending.find((p) => p.id === id);
    const response = await acceptRequest(data);
    if (response.data.success) {
      toast.success(response.data.message, { position: "bottom-center" });
      const rid = data.id;
      const r = await deleteRequest({ rid });
      if (r.data.status) {
        const req = pending.filter((item) => item.id != id);
        setPending(req);
      }
    }
  };
  const handleDelete = async (id) => {
    const data = pending.find((p) => p.id === id);
    const rid = data.id;
    const response = await deleteRequest({ rid });
    if (response.data.status) {
      toast.success(response.data.message, { position: "bottom-center" });
      const req = pending.filter((item) => item.id != id);
      setPending(req);
    }
  };
  return (
    <div className="overflow-x-clip lg:mt-[150px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h2 className="font-bold text-4xl font-serif text-primary text-center">
        Pending Requests
      </h2>
      <div className="w-screen mt-3">
        <div className="px-4 lg:flex text-right lg:justify-center">
          <div className="mt-4 mb-4 grid gap-x-2 gap-y-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
            {pending?.map((item) => (
              <>
                <div
                  key={item.id}
                  className="border-primary border transform transition duration-300 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-2"
                >
                  <div className="wow fadeInUp" data-wow-delay=".15s">
                    <h3 className="font-semibold text-black text-xl mx-auto text-center items-center">
                      {item.first_name}
                    </h3>
                    <p>Id: {item.govt_id}</p>
                  </div>
                  <div className="flex justify-evenly mt-2">
                    <button
                      onClick={() => {
                        handleAccept(item.id);
                      }}
                      className="bg-primary text-white p-2 hover:bg-primary/80"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      className="bg-primary text-white p-2 hover:bg-primary/80"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
