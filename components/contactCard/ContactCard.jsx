import React from "react";
import ContactDescription from "./ContactDescription";
import ContactInfo from "./ContactInfo";

const ContactCard = () => {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 xs:p-5 sm:p-8 md:p-10 ">
      <h1 className="mb-5 text-lg font-semibold">ارتباط با ما</h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        <ContactDescription />
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactCard;
