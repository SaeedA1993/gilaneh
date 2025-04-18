"use client"
import React from 'react'
import { RiEqualizerLine } from "react-icons/ri";


const FilterSelectSmallScreen = ({setOpenFilterModal}) => {
  return (
    <div
        onClick={() => setOpenFilterModal(true)}
        className="flex items-center shadow-md bg-white py-2 px-3 rounded-lg cursor-pointer"
      >
        <RiEqualizerLine size={20} className="ml-2" />
        <p className="text-sm">فیلترها</p>
      </div>
  )
}

export default FilterSelectSmallScreen