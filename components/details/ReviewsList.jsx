"use client";
import React from "react";
import SingleReview from "./SingleReview";

const ReviewsList = ({ reviews, loading }) => {
  return (
    <div className="mt-4">
      {loading ? (
        <p>در حال بارگزاری...</p>
      ) : (
        <div className="lg:grid lg:grid-cols-2 gap-4">
          {reviews.map((review, index) => (
            <SingleReview key={index} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsList;
