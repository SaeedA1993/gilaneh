import React from "react";
import Image from "next/image";

const SingleShopFeature = ({ item }) => {
  return (
    <li className="mb-5 px-4 py-8 flex flex-col">
      <Image
        className="mx-auto"
        src={item.img}
        width={50}
        height={50}
        alt="features"
      />
      <h2 className="text-center my-2 text-lg text-primary-700 font-semibold">
        {item.title}
      </h2>
      <h3 className="text-center text-md text-primary-600">{item.desc}</h3>
    </li>
  );
};

export default SingleShopFeature;
