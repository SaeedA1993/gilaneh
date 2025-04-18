"use client";

import { useState } from "react";


import SignupCard from "@/components/signupCard/SignupCard";
import LoginCard from "@/components/loginCard/LoginCard";

const AuthFormTabs = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="w-full max-w-md">
      <div className="flex mb-6 border-b border-gray-300">
        <button
          className={`flex-1 py-2 text-center font-medium transition ${
            activeTab === "login"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("login")}
        >
          ورود
        </button>
        <button
          className={`flex-1 py-2 text-center font-medium transition ${
            activeTab === "register"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("register")}
        >
          ثبت نام
        </button>
      </div>

      {activeTab === "login" ? <LoginCard /> : <SignupCard />}
    </div>
  );
};

export default AuthFormTabs;
