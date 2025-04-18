"use client";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";

const FooterSubscribe = () => {
  return (
    <div className="w-[250px] xs:w-[300px]">
      <h3 className="mb-5 text-sm font-semibold">عضویت در خبرنامه</h3>
      <form className="flex flex-col w-full">
        <div className="mb-3 flex items-center">
          <input
            className="w-full h-[35px] py-2 px-4 bg-white text-gray-900 text-xs placeholder:text-xs outline-none border-none rounded-r-md"
            type="email"
            placeholder="ایمیل خود را وارد نمایید"
          />
          <IoMdMail
            size={35}
            className="p-2 bg-white text-gray-400 border-r-[1px] border-r-gray-400 rounded-l-md"
          />
        </div>
        <div className="mb-3 flex items-center">
          <input
            className="w-full h-[35px] py-2 px-4 bg-white text-gray-900 text-xs placeholder:text-xs outline-none border-none rounded-r-md"
            type="text"
            placeholder="شماره موبایل خود را وارد نمایید"
          />
          <FaMobileAlt
            size={35}
            className="p-2 bg-white text-gray-400 border-r-[1px] border-r-gray-400 rounded-l-md"
          />
        </div>

        <button
          className="w-full mt-2 px-4 py-2 text-white text-sm bg-warning-600 hover:bg-warning-500 duration-300 rounded-md"
          type="submit"
        >
          عضویت در خبرنامه
        </button>
      </form>
    </div>
  );
};

export default FooterSubscribe;
