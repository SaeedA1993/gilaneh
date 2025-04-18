"use client";
import React from "react";
import CategoryDropDownWrapper from "./CategoryDropDownWrapper";
import WeightDropDownWrapper from "./WeightDropDownWrapper";

const FilterSelectBigScreen = ({
  categoriesData,
  categoryChecked,
  setCategoryChecked,
  openCategoryDropDown,
  setOpenCategoryDropDown,
  weightData,
  weightChecked,
  setWeightChecked,
  openWeightDropDown,
  setOpenWeightDropDown,
  queries,
  setQueries,
}) => {
  return (
    <div className="flex items-center gap-3">
      <CategoryDropDownWrapper
        categoriesData={categoriesData}
        categoryChecked={categoryChecked}
        setCategoryChecked={setCategoryChecked}
        openCategoryDropDown={openCategoryDropDown}
        setOpenCategoryDropDown={setOpenCategoryDropDown}
        queries={queries}
        setQueries={setQueries}
      />
      <WeightDropDownWrapper
        weightData={weightData}
        weightChecked={weightChecked}
        setWeightChecked={setWeightChecked}
        openWeightDropDown={openWeightDropDown}
        setOpenWeightDropDown={setOpenWeightDropDown}
        queries={queries}
        setQueries={setQueries}
      />
      
    </div>
  );
};

export default FilterSelectBigScreen;
