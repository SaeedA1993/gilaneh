import React from 'react'

const ProductDetailTags = ({categoryId,subCategory}) => {
  return (
    <div className="mb-3 flex items-center gap-2">
        <p className="py-1 px-2 text-xs text-success-900 bg-success-200 rounded-full">
        {categoryId === 1 ?'چای':'برنج'}
        </p>
        <p className="py-1 px-2 text-xs text-accent-900 bg-accent-200 rounded-full">
          {subCategory}
        </p>
      </div>
  )
}

export default ProductDetailTags