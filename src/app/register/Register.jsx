"use client";

import React, { useState } from "react";
import Link from "next/link";
import { register } from "@/services/user";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    state: "",
    pincode: "",
    suffering: "",
    relation: "",
    govtId: "",
    password: "",
    confirmPass: "",
  });
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPass) {
      toast.error("Password doesn't match", { position: "bottom-center" });
    } else {
      try {
        const response = await register(formData);
        if (response.success) {
          toast.success(response.message, { position: "bottom-center" });
        }
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          country: "",
          state: "",
          pincode: "",
          suffering: "",
          relation: "",
          govtId: "",
          password: "",
          confirmPass: "",
        });
        router.push("/login");
      } catch (error) {
        toast.error(response.message, { position: "bottom-center" });
      }
    }
  };
  return (
    <div className="overflow-x-clip lg:mt-[150px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      {/* <!-- component --> */}
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-bold text-4xl font-serif text-primary text-center">
              Register to become our member
            </h2>
            <p className="text-gray-500 mb-6 text-center mt-4">
              Registration is valid for individuals diagnosed with sickle cell
              disease or those who has a kin with this condition
            </p>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>
                <form onSubmit={handleSubmit} className="lg:col-span-2">
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      {/* first name */}
                      <div className="md:col-span-2">
                        <label for="full_name">First Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          required
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              firstName: event.target.value,
                            });
                          }}
                          value={formData.firstName}
                        />
                      </div>
                      {/* last name */}
                      <div className="md:col-span-2">
                        <label for="full_name">Last Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              lastName: event.target.value,
                            });
                          }}
                          value={formData.lastName}
                        />
                      </div>
                      {/* email */}
                      <div className="md:col-span-5">
                        <label for="email_id">Email Address</label>
                        <input
                          type="email"
                          name="email_id"
                          id="email_id"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="email@domain.com"
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              email: event.target.value,
                            });
                          }}
                          value={formData.email}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="phone">Phone Number</label>
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          required
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              phone: event.target.value,
                            });
                          }}
                          value={formData.phone}
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label for="address">Address / Street</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          required
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              address: event.target.value,
                            });
                          }}
                          value={formData.address}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">City</label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          required
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              city: event.target.value,
                            });
                          }}
                          value={formData.city}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="country">Country / region</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            name="country"
                            id="country"
                            placeholder="Country"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            required
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                country: event.target.value,
                              });
                            }}
                            value={formData.country}
                          />
                          {/* <button
                          tabindex="-1"
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabindex="-1"
                          for="show_more"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button> */}
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label for="state">State / province</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            name="state"
                            id="state"
                            placeholder="State"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            required
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                state: event.target.value,
                              });
                            }}
                            value={formData.state}
                          />
                          {/* <button
                          tabindex="-1"
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabindex="-1"
                          for="show_more"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button> */}
                        </div>
                      </div>

                      <div className="md:col-span-1">
                        <label for="zipcode">Pincode</label>
                        <input
                          type="number"
                          name="zipcode"
                          id="zipcode"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          required
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              pincode: event.target.value,
                            });
                          }}
                          value={formData.pincode}
                        />
                      </div>
                      <fieldset className="relative z-0 w-full p-px md:col-span-5">
                        <label htmlFor="zipcode">
                          Who is suffering from Sickle-Cell disease ?
                        </label>
                        <div className="block pt-3 pb-2 space-x-4">
                          <label>
                            <input
                              type="radio"
                              name="sickleCell"
                              value="myself"
                              className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                              onChange={(event) => {
                                setFormData({
                                  ...formData,
                                  suffering: event.target.value,
                                });
                              }}
                              checked={formData.suffering === "myself"}
                            />
                            Myself
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="sickleCell"
                              value="kin"
                              className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                              onChange={(event) => {
                                setFormData({
                                  ...formData,
                                  suffering: event.target.value,
                                });
                              }}
                              checked={formData.suffering === "kin"}
                            />
                            Kin
                          </label>
                        </div>
                        {formData.suffering === "" && (
                          <span className="text-sm text-red-600">
                            Option has to be selected
                          </span>
                        )}
                      </fieldset>
                      {/* relation with kin */}
                      <div className="md:col-span-5">
                        <label for="relation">Relation with the kin</label>
                        <input
                          type="text"
                          name="relation"
                          id="relation"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              relation: event.target.value,
                            });
                          }}
                          value={formData.relation}
                          disabled={formData.suffering !== "kin"}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label for="full_name">
                          Enter the registered government id
                        </label>
                        <input
                          type="number"
                          name="full_name"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          required
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              govtId: event.target.value,
                            });
                          }}
                          value={formData.govtId}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label for="password">Password</label>
                        <input
                          type="text"
                          name="password"
                          id="password"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Create a password"
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              password: event.target.value,
                            });
                          }}
                          value={formData.password}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label for="email">Confirm Password</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          required
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              confirmPass: event.target.value,
                            });
                          }}
                          value={formData.confirmPass}
                          placeholder=""
                        />
                      </div>
                      <div className="flex md:col-span-5">
                        <p>Already a member?</p>
                        <Link
                          href="/login"
                          className="text-primary hover:underline"
                        >
                          Login
                        </Link>
                      </div>
                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button className="bg-primary text-white font-bold py-2 px-4 rounded">
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
