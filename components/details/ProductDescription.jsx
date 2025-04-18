import React from "react";

const ProductDescription = ({ description }) => {
  return (
    <>
      <h3>جزئیات محصول</h3>
      <div className="my-3 h-[2px] bg-accent-800"></div>
      <h4 className="mb-4 text-justify text-sm ">{description}</h4>
    </>
  );
};

export default ProductDescription;
