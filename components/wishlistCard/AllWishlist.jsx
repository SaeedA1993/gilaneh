import React from 'react'
import WishlistItem from './WishlistItem'

const AllWishlist = ({allWishlist}) => {
    console.log(allWishlist)
  return (
    <div className='block md:grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
        {allWishlist.map((item)=>{
            return(
                <WishlistItem key={item.id} item={item.product} />
            )
        })}
    </div>
  )
}

export default AllWishlist