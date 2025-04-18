import React from 'react'

const ProductInfo = ({weight,price}) => {
  return (
    <section className="my-3">
        <div className="mb-2 flex items-start gap-3">
          <p>وزن:</p>
          <div className="flex items-center gap-1">
            <p>{weight}</p>
            <p>کیلوگرم</p>
          </div>
        </div>
        <div className="mb-2 flex items-start gap-3">
          <p>قیمت هر واحد</p>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-success-600">
              {price}
            </p>
            <p className=" text-success-600">تومان</p>
          </div>
        </div>
      </section>
  )
}

export default ProductInfo