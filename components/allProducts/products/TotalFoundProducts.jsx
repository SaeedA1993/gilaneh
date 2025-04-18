import React from 'react'

const TotalFoundProducts = ({count}) => {
  return (
    <>
    <div className="flex items-center text-sm">
          <p className="ml-2 font-semibold">{count}</p>
          <p>کالا</p>
        </div>
    </>
  )
}

export default TotalFoundProducts