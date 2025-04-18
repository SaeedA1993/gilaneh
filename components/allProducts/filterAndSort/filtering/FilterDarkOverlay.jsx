"use client"
import React from 'react'

const FilterDarkOverlay = ({openFilterModal}) => {
  return (
    <div
        className={`${
          openFilterModal
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } ease-in-out duration-300  bg-[rgba(0,0,0,0.5)] fixed top-0 right-0 bottom-0 left-0 z-[30]`}
      ></div>
    
  )
}

export default FilterDarkOverlay