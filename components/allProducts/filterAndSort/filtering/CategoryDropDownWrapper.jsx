"use client";
import React, { useEffect, useRef, useState } from "react";
import CategoryDropDown from "./CategoryDropDown";
import { IoChevronDown } from "react-icons/io5";

const CategoryDropDownWrapper = ({
  categoriesData,
  categoryChecked,
  setCategoryChecked,
  queries,
  setQueries,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!categoryRef.current?.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [categoryRef]);
  return (
    <section className="relative">
      <div
        onClick={() => setOpenMenu(true)}
        className="flex items-center gap-2 shadow-md bg-white py-2 px-3 rounded-lg cursor-pointer "
      >
        <h3 className="text-sm">دسته بندی</h3>
        <IoChevronDown />
      </div>
      {openMenu && (
        <div ref={categoryRef}>
          <CategoryDropDown
            categoriesData={categoriesData}
            categoryChecked={categoryChecked}
            setCategoryChecked={setCategoryChecked}
            setOpenMenu={setOpenMenu}
            queries={queries}
            setQueries={setQueries}
          />
        </div>
      )}
    </section>
  );
};

export default CategoryDropDownWrapper;
