"use client"
import React from "react";
import { FaSortAmountDown } from "react-icons/fa";

const SortSelectBigScreen = ({sortOptions,sortSelection,setSortSelection}) => {
  return (
    <div className="flex items-center gap-3 md:mb-5 xl:mb-0">
      <div className="flex items-center gap-2 shadow-md bg-white py-2 px-3 rounded-lg">
        <FaSortAmountDown />
        <p className="text-sm">مرتب سازی بر اساس:</p>
      </div>
      {sortOptions.map((item) => (
        <h3
          key={item.id}
          onClick={() => setSortSelection(item)}
          className={`${(
            sortSelection.tag === item.tag && sortSelection.order === item.order)
              ? `bg-accent-700 text-accent-100`
              : `bg-white text-black`
          } py-2 px-3 rounded-lg shadow-md text-sm cursor-pointer duration-300`}
        >
          {item.title}
        </h3>
      ))}
    </div>
  );
};

export default SortSelectBigScreen;
