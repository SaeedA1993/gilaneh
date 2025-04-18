"use client";
import React from "react";
import { navData } from "@/utils/navData";
import SidebarDarkOverlay from "./SidebarDarkOverlay";
import SidebarLogo from "./SidebarLogo";
import { IoMdCloseCircle } from "react-icons/io";
import SidebarLinks from "./SidebarLinks";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  return (
    <>
    <SidebarDarkOverlay openSidebar={openSidebar} />
      <div
        className={`${
          openSidebar ? "translate-x-0" : "translate-x-full"
        } h-screen w-full xs:w-2/3  p-5 bg-white text-secondary-100  fixed top-0 right-0 z-[100] ease-in-out duration-300 `}
      >
        <div className="mb-6">
          <IoMdCloseCircle size={24} onClick={() => setOpenSidebar(false)} color="#102D26" />
        </div>
        <SidebarLogo />
        <div className="h-[2px] bg-primary-600 my-3"></div>

        <SidebarLinks navData={navData} setOpenSidebar={setOpenSidebar} />
      </div>
    </>
  );
};

export default Sidebar;
