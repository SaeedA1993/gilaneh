import React from "react";
import Image from "next/image";
import AuthFormTabs from "@/components/auth/AuthFormTabs";

const AuthPage = () => {
  return (
    <div className="mt-[70px] flex flex-col lg:flex-row lg:items-start h-screen">
      <div className="w-full lg:w-1/2 h-[30vh] sm:h-[40vh] lg:h-full relative">
        <Image
          src="/images/auth/tealeaf.jpg"
          alt="auth image"
          fill
          className="object-cover"
        />
      </div>
      <div className="-mt-5 z-10 lg:mt-0 w-full bg-white lg:w-1/2 flex items-center justify-center p-4 rounded-t-2xl lg:rounded-none">
        <AuthFormTabs />
      </div>
    </div>
  );
};

export default AuthPage;
