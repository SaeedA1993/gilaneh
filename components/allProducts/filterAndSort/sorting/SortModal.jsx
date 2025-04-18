"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import SortDarkOverlay from "./SortDarkOverlay";

const SortModal = ({
  allSorts,
  openSortModal,
  setOpenSortModal,
  sortSelection,
  setSortSelection,
}) => {
  const handleSort = (item) => {
    setSortSelection(item);
    setOpenSortModal(false);
  };
  return (
    <>
      <SortDarkOverlay openSortModal={openSortModal} />
      <div
        className={`${
          openSortModal ? "translate-y-0" : "translate-y-full"
        } w-screen h-1/2 bg-white  p-5  fixed bottom-0 right-0 z-[30] ease-in-out duration-300 `}
      >
        <div className="mb-3">
          <IoClose size={24} onClick={() => setOpenSortModal(false)} />
        </div>

        <h2 className="text-center">مرتب سازی بر اساس</h2>
        <div className="h-[1px] bg-gray-500 my-4"></div>
        <div className="mt-5">
          <ul className="flex flex-col items-center gap-4">
            {allSorts.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSort(item)}
                className={`duration-300 ${(
                  sortSelection.tag === item.tag &&
                  sortSelection.order === item.order)
                    ? "bg-info-600 w-full text-center text-white py-2 px-4 rounded-md"
                    : "bg-white text-black"
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SortModal;
