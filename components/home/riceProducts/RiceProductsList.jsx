import React from "react";
import ProductCard from "@/components/shared/productCard/ProductCard";

const RiceProductsList = ({ riceList }) => {
  return (
    <ul className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {riceList.map((item) => (
        <li key={item.id} className="mb-6 sm:mb-0">
          <ProductCard product={item} />
        </li>
      ))}
    </ul>
  );
};

export default RiceProductsList;
