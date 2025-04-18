"use client"
import React from "react";
import Link from "next/link";

const SidebarSingleLink = ({ link,setOpenSidebar }) => {
  return (
    <>
      <li className="text-primary-800">
        <Link href={link.path} onClick={() => setOpenSidebar(false)}>
          {link.title}
        </Link>
      </li>
    </>
  );
};

export default SidebarSingleLink;
