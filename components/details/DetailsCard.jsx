import React from 'react'
import DetailsContent from './DetailsContent'
import ProductReviews from './ProductReviews'
import DetailsCarousel from './DetailsCarousel'

const DetailsCard = ({product}) => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 gap-4 lg:grid-cols-5'>
        <DetailsCarousel gallery={product.images} />
        <DetailsContent data={product} />
        <ProductReviews productId={product.id} />
    </div>
  )
}

export default DetailsCard