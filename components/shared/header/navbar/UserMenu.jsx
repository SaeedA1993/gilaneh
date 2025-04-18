import React, { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";


const UserMenu = ({ setOpenUserDropdown }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center gap-3">
      <p className="text-sm">{user.name}</p>
      <RxAvatar size={20} className="text-primary-800 cursor-pointer" onClick={() => setOpenUserDropdown(true)}/>
      
    </div>
  );
};

export default UserMenu;
