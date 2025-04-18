"use client";
import React from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/cart/cartSlice";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaSquareMinus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";

const SingleCart = ({ item }) => {
  const dispatch = useDispatch();
  var formatter = new Intl.NumberFormat("fa-IR");
  const minId = Math.min(...item.images.map((img) => img.id));
  const imgIndex = item.images.findIndex((img) => img.id === minId);

  return (
    <div className="mb-6 py-4 px-4 bg-white rounded-md shadow-sm">
      <main className="flex justify-between items-center ">
        <div>
          <h3 className="text-md text-primary-800 font-semibold mb-3">
            {item.name}
          </h3>
          <div className="flex items-center gap-4 xs:gap-2">
            <div className="flex flex-col items-center gap-1 xs:flex-row xs:gap-1">
              <FaSquarePlus
                className="text-tertiary-600 cursor-pointer"
                size={20}
                onClick={() => dispatch(increaseQuantity(item))}
              />

              <p className=" font-semibold xs:w-[24px] text-center">
                {item.quantity}
              </p>
              <FaSquareMinus
                className="text-tertiary-600 cursor-pointer"
                size={20}
                onClick={() => dispatch(decreaseQuantity(item))}
              />
            </div>
            <p className="text-md text-primary-800">بسته</p>
          </div>

          <div className="mt-3 flex items-baseline">
            <p className="ml-3">وزن هر بسته</p>
            <div className="flex items-center">
              <p className="ml-2 font-semibold">
                {item.weight}
              </p>
              <p>کیلوگرم</p>
            </div>
          </div>

          <div className="mt-3 flex items-baseline">
            <p className="ml-3">قیمت هر بسته</p>
            <div className="flex items-center">
              <p className="ml-2 font-semibold">
                {formatter.format(item.price)}
              </p>
              <p>تومان</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center">
              <BsFillTrash3Fill
                size={20}
                className=" ml-2 text-error-600 cursor-pointer hover:text-error-500 duration-300"
                onClick={() => dispatch(removeFromCart(item))}
              />
              <p className="font-semibold text-sm">حذف از سبد</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={`http://localhost:8000${item.images[imgIndex].image_url}`}
            width={80}
            height={80}
            alt="cart image"
          />
        </div>
      </main>
      <div className="mt-4">
        <div className="h-[1px] bg-primary-900 mb-3"></div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-primary-800 font-semibold mb-2">وزن مجموع</p>
          <div className="flex items-center">
            <p className="ml-1 text-primary-800 font-semibold">
              {item.quantity * item.weight}
            </p>
            <p>کیلوگرم</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-primary-800 font-semibold mb-2">قیمت مجموع</p>
          <div className="flex items-center">
            <p className="ml-1 text-primary-800 font-semibold">
              {formatter.format(item.quantity * item.price)}
            </p>
            <p>تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
