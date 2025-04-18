import React from 'react'
import ProductCard from '@/components/shared/productCard/ProductCard'

const PopularsList = ({populars}) => {
  return (
    <ul className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {populars.map((item) => (
          <li key={item.id} className="mb-6 sm:mb-0">
            <ProductCard product={item} />
          </li>
        ))}
      </ul>
  )
}

export default PopularsList