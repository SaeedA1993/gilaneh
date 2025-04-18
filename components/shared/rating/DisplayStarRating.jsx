import React from "react";
import { FaStar } from "react-icons/fa6";

const DisplayStarRating = ({ rating,size }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((star, index) => (
        <FaStar
        key={index}
          size={size}
          color={index + 1 <= rating ? "#ffc107" : "#e4e5e9"}
        />
      ))}
    </div>
  );
};

export default DisplayStarRating;
