"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import CategoryFilter from "./CategoryFilter";

const CategoryDropDown = ({
  setOpenMenu,
  categoriesData,
  categoryChecked,
  setCategoryChecked,
  queries,
  setQueries,
}) => {
  const handleSubmitCategory = (e) => {
    e.preventDefault();
    let categoryIndexArray = [];
    categoryChecked.forEach((val, index) => {
      if (val) {
        categoryIndexArray.push(index);
      }
    });
    const selectedCategoryOption = categoryIndexArray.map(
      (item) => categoriesData[item].name
    );
    setQueries({
      ...queries,
      filterByCategory: selectedCategoryOption,
    });
    setOpenMenu(false);
  };

  return (
    <div className="absolute top-[110%] right-[30%] p-5 min-w-[300px] rounded-lg bg-white text-black shadow-xl  z-[15]">
      <div
        onClick={() => setOpenMenu(false)}
        className="mb-3 cursor-pointer"
      >
        <IoClose size={20} />
      </div>
      <CategoryFilter
        categoriesData={categoriesData}
        categoryChecked={categoryChecked}
        setCategoryChecked={setCategoryChecked}
      />
      <button
        onClick={handleSubmitCategory}
        className="mt-5 px-4 py-2 text-md text-white w-full bg-info-600 hover:bg-info-500 duration-300 rounded-md"
      >
        اعمال فیلتر
      </button>
    </div>
  );
};

export default CategoryDropDown;
