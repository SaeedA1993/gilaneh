"use client";
import React from "react";
import moment from "jalali-moment";
import DisplayStarRating from "../shared/rating/DisplayStarRating";

const SingleReview = ({ review }) => {
  return (
    <div className="bg-primary-50 mb-4 p-4 xs:p-5 rounded-md shadow-md">
      <p>{review.user.name}</p>
      <p className="my-1 text-gray-500 text-sm">
        {moment(review.created_at, "YYYY/MM/DD")
          .locale("fa")
          .format("YYYY/MM/DD")}
      </p>
        <DisplayStarRating rating={review.rating} size={12} />
      <p className="mt-5 text-gray-800">{review.comment}</p>
    </div>
  );
};

export default SingleReview;
