"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = ({ queries, setQueries }) => {
  const [searchText, setSearchText] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setQueries({ ...queries, searchBy: searchText });
  };
  return (
    <div className="mb-6 relative shadow-md rounded-md md:w-2/3 xl:w-1/2">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full h-[40px] py-2 px-4 bg-white text-sm outline-none  border-none rounded-md placeholder:text-sm"
        type="text"
        placeholder="جستجو ..."
      />
      <IoSearch
        onClick={searchSubmitHandler}
        size={16}
        className="text-gray-500 absolute top-[12px] left-3 cursor-pointer"
      />
    </div>
  );
};

export default SearchBox;
