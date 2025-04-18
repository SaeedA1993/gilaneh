import React from 'react'

const Divider = ({bgColor}) => {
  return (
    <div className={`h-[1px] bg-${bgColor} my-6`}></div>
  )
}

export default Divider