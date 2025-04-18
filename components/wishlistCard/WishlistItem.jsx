import React from "react";
import Image from "next/image";

const WishlistItem = ({ item }) => {
  const minId = Math.min(...item.images.map((pic) => pic.id));
  const index = item.images.findIndex((pic) => pic.id === minId);

  return (
    <div className="mb-3 p-4 bg-white  rounded-md flex justify-between shadow-sm">
      <div>
        <h2 className="mb-3">{item.name}</h2>
        <div className="flex items-center gap-1 mb-3">
          <h3>قیمت:</h3>
          <h3 className="text-success-600 font-semibold">{item.price}</h3>
          <h3 className="text-success-600 ">تومان</h3>
        </div>
        <div className="flex items-center gap-1">
          <h3>وزن:</h3>
          <h3 className="font-semibold">{item.weight}</h3>
          <h3>کیلوگرم</h3>
        </div>
      </div>

      <Image
        src={item.images[index].image_url}
        width={100}
        height={100}
        className="w-[100px] h-[100px] object-cover"
        alt="product image"
      />
    </div>
  );
};

export default WishlistItem;
