import React from "react";
import Image from "next/image";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center flex-grow">
      <Image
        src="/images/empty-cart.png"
        width={100}
        height={100}
        alt="empty cart"
      />
      <h2 className="my-5 text-xl text-primary-800 font-semibold">
        سبد شما خالی است
      </h2>
      <h3 className="mb-5 text-lg text-primary-700 ">
        جهت سفارش محصول مد نظر به صفحه اصلی بروید
      </h3>
      <Link href="/" className="bg-accent-700 text-white px-3 py-1 rounded-md">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default EmptyCart;
