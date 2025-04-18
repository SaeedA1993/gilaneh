import React from "react";
import { featuresData } from "@/utils/featuresData";
import SingleShopFeature from "./SingleShopFeature";

const ShopFeatures = () => {
  return (
    <div className="bg-white px-5 py-8 sm:px-8">
      <ul className="block sm:grid sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
        {featuresData.map((item, index) => (
          <SingleShopFeature key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ShopFeatures;
