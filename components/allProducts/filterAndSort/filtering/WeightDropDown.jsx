"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import WeightFilter from "./WeightFilter";

const WeightDropDown = ({
  setOpenMenu,
  weightData,
  weightChecked,
  setWeightChecked,
  queries,
  setQueries,
}) => {
  const handleSubmitWeight = (e) => {
    e.preventDefault();
    let weightIndexArray = [];
    weightChecked.forEach((val, index) => {
      if (val) {
        weightIndexArray.push(index);
      }
    });
    const selectedWeightOption = weightIndexArray.map(
      (item) => weightData[item].name
    );
    setQueries({
      ...queries,
      filterByWeight: selectedWeightOption,
    });
    setOpenMenu(false);
  };
  return (
    <div className="absolute top-[110%] right-[30%] p-5 min-w-[300px] rounded-lg bg-white text-black shadow-xl z-[15]">
      <div
        className="mb-3 cursor-pointer"
        onClick={() => setOpenMenu(false)}
      >
        <IoClose size={20} />
      </div>
      <WeightFilter
        weightData={weightData}
        weightChecked={weightChecked}
        setWeightChecked={setWeightChecked}
      />
      <button
        onClick={handleSubmitWeight}
        className="mt-5 px-4 py-2 text-md text-white w-full bg-info-600 hover:bg-info-500 duration-300 rounded-md"
      >
        اعمال فیلتر
      </button>
    </div>
  );
};

export default WeightDropDown;
