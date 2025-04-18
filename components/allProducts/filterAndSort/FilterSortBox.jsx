"use client";
import React, { useEffect, useState } from "react";
import SortModal from "./sorting/SortModal";
import sortOptions from "@/utils/sortOptions";
import categoriesData from "@/utils/categoriesData";
import weightData from "@/utils/weightData";
import FilterModal from "./filtering/FilterModal";
import FilterSortSmallScreen from "./FilterSortSmallScreen";
import FilterSortBigScreen from "./FilterSortBigScreen";

const FilterSortBox = ({ queries, setQueries }) => {
  const initialCategoryState = [
    true,
    ...new Array(categoriesData.length - 1).fill(false),
  ];

  const initialWeightState = [
    true,
    ...new Array(weightData.length - 1).fill(false),
  ];

 
  const [sortSelection, setSortSelection] = useState(sortOptions[0]);
  const [openSortModal, setOpenSortModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openCategoryDropDown, setOpenCategoryDropDown] = useState(false);
  const [openWeightDropDown, setOpenWeightDropDown] = useState(false);
  const [categoryChecked, setCategoryChecked] = useState(initialCategoryState);
  const [weightChecked, setWeightChecked] = useState(initialWeightState);

  useEffect(() => {
    setQueries({
      ...queries,
      sortBy: sortSelection.tag,
      sortOrder:sortSelection.order
    });
  }, [sortSelection]);

  return (
    <div>
      <FilterSortSmallScreen
        setOpenFilterModal={setOpenFilterModal}
        setOpenSortModal={setOpenSortModal}
        sortSelection={sortSelection}
      />
      <FilterSortBigScreen
        categoriesData={categoriesData}
        categoryChecked={categoryChecked}
        setCategoryChecked={setCategoryChecked}
        openCategoryDropDown={openCategoryDropDown}
        setOpenCategoryDropDown={setOpenCategoryDropDown}
        weightData={weightData}
        weightChecked={weightChecked}
        setWeightChecked={setWeightChecked}
        openWeightDropDown={openWeightDropDown}
        setOpenWeightDropDown={setOpenWeightDropDown}
        queries={queries}
        setQueries={setQueries}
        sortOptions={sortOptions}
        sortSelection={sortSelection}
        setSortSelection={setSortSelection}
      />
      <SortModal
        allSorts={sortOptions}
        openSortModal={openSortModal}
        setOpenSortModal={setOpenSortModal}
        sortSelection={sortSelection}
        setSortSelection={setSortSelection}
      />
      <FilterModal
        queries={queries}
        setQueries={setQueries}
        openFilterModal={openFilterModal}
        setOpenFilterModal={setOpenFilterModal}
        categoriesData={categoriesData}
        categoryChecked={categoryChecked}
        setCategoryChecked={setCategoryChecked}
        weightData={weightData}
        weightChecked={weightChecked}
        setWeightChecked={setWeightChecked}
      />
    </div>
  );
};

export default FilterSortBox;
