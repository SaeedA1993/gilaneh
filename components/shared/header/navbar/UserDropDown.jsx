import React from "react";
import Link from "next/link";

const UserDropDown = ({
  setOpenUserDropdown,
  logoutHandler,
}) => {
  return (
    <div className="absolute top-8 -left-4 bg-white p-2 w-[200px] rounded-md shadow-md">
      <ul className="flex flex-col gap-2 text-sm ">
        <Link  href="/profile" onClick={()=>setOpenUserDropdown(false)}>
          <li className="text-gray-800 hover:bg-slate-100 p-2 rounded-md">پروفایل</li>
        </Link>
        <Link href="/orders" onClick={()=>setOpenUserDropdown(false)}>
          <li className="text-gray-800 hover:bg-slate-100 p-2 rounded-md">لیست سفارش ها</li>
        </Link>
        <Link href="/wishlist" onClick={()=>setOpenUserDropdown(false)}>
          <li className="text-gray-800 hover:bg-slate-100 p-2 rounded-md">لیست علاقه مندی ها</li>
        </Link>
        <li className="cursor-pointer text-gray-800 hover:bg-slate-100 p-2 rounded-md" onClick={logoutHandler} >
          خروج
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
