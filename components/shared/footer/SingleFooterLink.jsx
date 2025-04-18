"use client";
import React from "react";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";

const SingleFooterLink = ({item}) => {
  return (
    <>
      <li className="text-sm" >
        <Link className="text-white no-underline flex items-center" href={item.link}>
          <FaCircle size={5} className="ml-2 text-warning-400" />
          {item.title}
        </Link>
      </li>
    </>
  );
};

export default SingleFooterLink;
