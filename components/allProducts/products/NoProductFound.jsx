import Image from "next/image";
import React from "react";

const NoProductFound = () => {
  return (
    <div className="min-h-[50vh] mt-[100px]">
      <Image
      className="mx-auto"
        width={80}
        height={80}
        src="/images/no_result.png"
        alt="no product found"
      />
      <h2 className="mt-5 text-center text-lg">
        کالایی با این مشخصات یافت نشد
      </h2>
    </div>
  );
};

export default NoProductFound;
