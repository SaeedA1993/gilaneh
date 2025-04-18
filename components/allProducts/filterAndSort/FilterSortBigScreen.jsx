import React from "react";
import FilterSelectBigScreen from "./filtering/FilterSelectBigScreen";
import SortSelectBigScreen from "./sorting/SortSelectBigScreen";

const FilterSortBigScreen = ({
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
  sortOptions,
  setSortSelection,
  sortSelection,
}) => {
  return (
    <section className="hidden mb-5 md:flex md:flex-col-reverse xl:flex-row xl:items-center xl:justify-between ">
      <FilterSelectBigScreen
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
      />
      <SortSelectBigScreen
        sortOptions={sortOptions}
        sortSelection={sortSelection}
        setSortSelection={setSortSelection}
      />
    </section>
  );
};

export default FilterSortBigScreen;
