"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, setRating }) => {
  const handleRating = (index) => {
    setRating(index + 1);
  };
  return (
    <div className="mb-3">
      {[...Array(5)].map((_, index) => {
        const filled = index < rating;
        return (
          <FaStar
            key={index}
            className={`inline-block w-6 h-6  cursor-pointer ${
              filled ? "text-yellow-500" : "text-gray-200"
            }`}
            onClick={() => handleRating(index)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
