import React from "react";

const ContactInfo = () => {
  return (
    <div className="lg:col-span-1 lg:mr-[50px]">
      <h2 className="mb-5 text-lg text-center text-accent-700">
        ساعات کاری فروشگاه گیلانه
      </h2>
      <h3 className="mb-6 text-base text-center text-success-700 font-semibold">
        شنبه تا پنج شنبه ۹ صبح تا ۱۸
      </h3>
      <div className="mb-5 flex items-baseline">
        <p className="ml-3">آدرس:</p>
        <p>گیلان-لنگرود-میدان معلم-ابتدای جاده لیلاکوه-فروشگاه گیلانه</p>
      </div>
      <div className="mb-5 flex items-center">
        <p className="ml-3">تلفن ثابت:</p>
        <p>۰۲۱۹۱۳۰۳۷۳۷ - ۰۲۱۸۸۴۵۴۸۱۶</p>
      </div>
      <div className="mb-5 flex items-center">
        <p className="ml-3">تلفن همراه:</p>
        <p>۰۹۱۱۶۱۳۷۸۵۶</p>
      </div>
    </div>
  );
};

export default ContactInfo;
