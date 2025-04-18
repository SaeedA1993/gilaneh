import React from "react";
import SidebarSingleLink from "./SidebarSingleLink";

const SidebarLinks = ({ navData, setOpenSidebar }) => {
  return (
    <div className="mt-5">
      <ul className="flex flex-col items-center gap-5">
        {navData.map((link, index) => (
          <SidebarSingleLink
            key={index}
            link={link}
            setOpenSidebar={setOpenSidebar}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarLinks;
