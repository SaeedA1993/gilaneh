"use client";
import React, { useEffect, useRef, useState } from "react";
import WeightDropDown from "./WeightDropDown";
import { IoChevronDown } from "react-icons/io5";

const WeightDropDownWrapper = ({
  weightData,
  weightChecked,
  setWeightChecked,
  queries,
  setQueries,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const weightRef = useRef(null);
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!weightRef.current?.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [weightRef]);

  return (
    <section className="relative">
      <div
        onClick={() => setOpenMenu(true)}
        className=" flex items-center gap-2 shadow-md bg-white py-2 px-3 rounded-lg cursor-pointer"
      >
        <h3 className="text-sm">وزن بسته</h3>
        <IoChevronDown />
      </div>
      {openMenu && (
        <div ref={weightRef}>
        <WeightDropDown
          weightData={weightData}
          weightChecked={weightChecked}
          setWeightChecked={setWeightChecked}
          setOpenMenu={setOpenMenu}
          queries={queries}
          setQueries={setQueries}
        />
        </div>
      )}
    </section>
  );
};

export default WeightDropDownWrapper;
