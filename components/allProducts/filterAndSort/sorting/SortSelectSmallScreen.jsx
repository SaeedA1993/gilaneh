"use client"
import React from 'react'
import { FaSortAmountDown } from "react-icons/fa";

const SortSelectSmallScreen = ({setOpenSortModal,sortSelection}) => {
  return (
    <div
        onClick={() => setOpenSortModal(true)}
        className="flex items-center shadow-md bg-white py-2 px-3 rounded-lg cursor-pointer"
      >
        <FaSortAmountDown size={20} className="ml-2" />
        <p className="text-sm">{sortSelection.title}</p>
      </div>
  )
}

export default SortSelectSmallScreen