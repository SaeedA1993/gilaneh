"use client"
import React from 'react'

const SortDarkOverlay = ({openSortModal}) => {
  return (
    <div
        className={`${
          openSortModal
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } ease-in-out duration-300  bg-[rgba(0,0,0,0.5)] fixed top-0 right-0 bottom-0 left-0 z-[20]`}
      ></div>
  )
}

export default SortDarkOverlay