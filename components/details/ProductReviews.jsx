"use client"
import React, { useEffect, useState } from 'react'
import NewReview from './NewReview'
import ReviewsList from './ReviewsList'
import axios from "axios";


const ProductReviews = ({productId}) => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchReviews = async () => {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${productId}/reviews`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const finalData = await result.data;
      setReviews(finalData);
      setLoading(false);
    };
    fetchReviews();
  }, []);
  return (
    <div className="p-4 xs:p-5 md:col-span-2 lg:col-span-5 bg-white shadow-md rounded-md">
        <h2 className='mb-3 font-semibold'>دیدگاه های کاربران</h2>
        <NewReview productId={productId} />
        <ReviewsList reviews={reviews} loading={loading} />
    </div>
  )
}

export default ProductReviews