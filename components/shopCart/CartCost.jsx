import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/cart/cartSlice";

const CartCost = ({ quantity, totalCost,weightSum }) => {
  const transportFee = 50000;
  const dispatch = useDispatch();
  var formatter = new Intl.NumberFormat("fa-IR");

  return (
    <section className="mb-6 bg-white flex-grow max-w-[300px] shadow-sm rounded-md">
      <div className="w-full rounded-t-md bg-secondary-300 py-2 px-3">
        <h2 className="text-center">هزینه نهایی سفارش</h2>
      </div>
      <main className="px-4 py-5">
      <div className="flex items-center justify-between">
          <p>تعداد کل اقلام</p>
          <div className="flex items-center">
            <p className="ml-1">{quantity}</p>
            <p>بسته</p>
          </div>
        </div>
        <div className="my-3 h-[1px] bg-gray-300"></div>
        <div className="flex items-center justify-between">
          <p>وزن کل اقلام</p>
          <div className="flex items-center">
            <p className="ml-1">{weightSum}</p>
            <p>کیلوگرم</p>
          </div>
        </div>
        <div className="my-3 h-[1px] bg-gray-300"></div>
        <div className="flex items-center justify-between">
          <p>قیمت کل اقلام</p>
          <div className="flex items-center">
            <p className="ml-1">{formatter.format(totalCost)}</p>
            <p>تومان</p>
          </div>
        </div>
        <div className="my-3 h-[1px] bg-gray-300"></div>
        <div className="flex items-center justify-between">
          <p>هزینه ارسال</p>
          <div className="flex items-center">
            <p className="ml-1">{formatter.format(transportFee)}</p>
            <p>تومان</p>
          </div>
        </div>
        <div className="my-3 h-[1px] bg-primary-900"></div>
        <div className="mb-5 flex items-center justify-between">
          <p className="font-semibold">هزینه نهایی</p>
          <div className="flex items-center">
            <p className="ml-1 font-semibold">{formatter.format(totalCost + transportFee)}</p>
            <p className="font-semibold">تومان</p>
          </div>
        </div>
        <button className="mb-2 bg-success-600 hover:bg-success-500 duration-300 text-white text-md w-full px-4 py-2 rounded-md">
          نهایی کردن سفارش
        </button>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-error-600 hover:bg-error-500 duration-300 text-white text-md w-full px-4 py-2 rounded-md"
        >
          لغو کل سفارشات
        </button>
      </main>
    </section>
  );
};

export default CartCost;
