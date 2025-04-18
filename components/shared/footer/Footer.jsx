import React from "react";
import FooterCopyRight from "./FooterCopyRight";
import FooterSubscribe from "./FooterSubscribe";
import FooterLinks from "./FooterLinks";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <section>
      <div className="p-4 bg-primary-800 text-white md:p-8 lg:flex lg:items-start lg:justify-center">
        <FooterInfo />
        <div className="md:flex md:items-start md:mt-5 lg:mr-5 lg:mt-0">
          <FooterLinks />
          <FooterSubscribe />
        </div>
      </div>
      <FooterCopyRight />
    </section>
  );
};

export default Footer;
