"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import CategoryFilter from "./CategoryFilter";
import WeightFilter from "./WeightFilter";
import FilterDarkOverlay from "./FilterDarkOverlay";
import Divider from "@/components/shared/divider/Divider";

const FilterModal = ({
  openFilterModal,
  setOpenFilterModal,
  queries,
  setQueries,
  categoriesData,
  categoryChecked,
  setCategoryChecked,
  weightData,
  weightChecked,
  setWeightChecked,
}) => {
  const handleSubmitFilter = (e) => {
    e.preventDefault();
    let categoryIndexArray = [];
    let weightIndexArray = [];
    categoryChecked.forEach((val, index) => {
      if (val) {
        categoryIndexArray.push(index);
      }
    });
    const selectedCategoryOption = categoryIndexArray.map(
      (item) => categoriesData[item].name
    );

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
      filterByCategory: selectedCategoryOption,
      filterByWeight: selectedWeightOption,
    });
    setOpenFilterModal(false);
  };

  return (
    <>
      <FilterDarkOverlay openFilterModal={openFilterModal} />
      <div
        className={`${
          openFilterModal ? "translate-x-0" : "translate-x-full"
        } h-screen w-full  sm:w-3/4  p-5 bg-white text-black overflow-y-scroll  fixed top-0 right-0 z-[40] ease-in-out duration-300 `}
      >
        <div className="mb-3">
          <IoClose size={24} onClick={() => setOpenFilterModal(false)} />
        </div>
        <h2 className="text-center text-xl">فیلترها</h2>
        <Divider bgColor="gray-600" />
        <CategoryFilter
          categoriesData={categoriesData}
          categoryChecked={categoryChecked}
          setCategoryChecked={setCategoryChecked}
        />
        <Divider bgColor="gray-400" />
        <WeightFilter
          weightData={weightData}
          weightChecked={weightChecked}
          setWeightChecked={setWeightChecked}
        />

        <button
          onClick={handleSubmitFilter}
          className="mt-[100px] px-4 py-2 text-md text-white w-full bg-info-600 hover:bg-info-500 duration-300 rounded-md"
        >
          اعمال فیلتر
        </button>
      </div>
    </>
  );
};

export default FilterModal;
