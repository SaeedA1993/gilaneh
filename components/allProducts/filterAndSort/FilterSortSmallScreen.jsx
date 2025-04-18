"use client"
import React from "react";
import FilterSelectSmallScreen from "./filtering/FilterSelectSmallScreen";
import SortSelectSmallScreen from "./sorting/SortSelectSmallScreen";

const FilterSortSmallScreen = ({setOpenFilterModal,setOpenSortModal,sortSelection}) => {
  return (
    <section className="mb-5 flex items-center gap-4 md:hidden">
      <FilterSelectSmallScreen setOpenFilterModal={setOpenFilterModal} />
      <SortSelectSmallScreen setOpenSortModal={setOpenSortModal} sortSelection={sortSelection} />
    </section>
  );
};

export default FilterSortSmallScreen;
