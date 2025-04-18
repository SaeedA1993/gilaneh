import Image from "next/image";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";

const FooterInfo = () => {
  return (
    <div>
      <div className="mt-5 lg:mt-0">
        <div className="flex items-center mb-4">
          <BiSolidPhoneCall className="ml-3 text-secondary-200" />
          <p className="text-sm">
            تلفن ثابت: ۰۲۱۹۱۳۰۳۷۳۷ - ۰۲۱۸۸۴۵۴۸۱۶
          </p>
        </div>
        <div className="flex items-center mb-4">
          <FaMobileAlt className="ml-3 text-secondary-200" />
          <p className="text-sm">تلفن همراه: ۰۹۱۱۶۱۳۷۸۵۶</p>
        </div>
      </div>
      <div>
        <Image
          src="/images/enamad.png"
          width={100}
          height={100}
          className="bg-white rounded-md"
          alt="enamad"
        />
      </div>
    </div>
  );
};

export default FooterInfo;
