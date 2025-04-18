"use client";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { navData } from "@/utils/navData";
import { IoMenu, IoCart } from "react-icons/io5";
import Sidebar from "../sidebar/Sidebar";
import { useSelector } from "react-redux";
import AuthContext from "@/context/AuthContext";
import axios from "axios";
import UserMenu from "./UserMenu";
import UserDropDown from "./UserDropDown";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openUserDropdown, setOpenUserDropdown] = useState(false);
  const [navShadow, setNavShadow] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const getQuantity = () => {
    let quantity = 0;
    cartItems.forEach((item) => (quantity += item.quantity));
    return quantity;
  };

  const cartCount = getQuantity();

  const logoutHandler = async () => {
    try {
      const { token } = JSON.parse(localStorage.getItem("jwt"));

      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/logout`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(null);
      localStorage.clear();
      setOpenUserDropdown(false);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleNavShadow = () => {
      if (window.scrollY > 0) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };
    window.addEventListener("scroll", handleNavShadow);

    return () => {
      window.removeEventListener("scroll", handleNavShadow);
    };
  }, [navShadow]);

  return (
    <>
      <nav
        className={`w-full ${
          navShadow && "shadow-md bg-opacity-95"
        } duration-300 h-[70px] fixed top-0 right-0 z-20 py-3 px-5 text-primary-800 bg-white flex items-center justify-between`}
      >
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpenSidebar(true)}>
            <IoMenu size={24} className="text-primary-800" />
          </button>
        </div>
        <Link href="/">
          <Image
            className="hidden md:block bg-transparent rounded-xl overflow-hidden bg-cover"
            src="/images/shoplogo.png"
            width={120}
            height={60}
            alt="logo of tea cup"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-5">
          {navData.map((link, index) => (
            <li className="text-sm relative group" key={index}>
              <Link href={link.path} className="transition duration-200">{link.title}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                <UserMenu setOpenUserDropdown={setOpenUserDropdown} />
                {openUserDropdown && (
                  <UserDropDown
                    setOpenUserDropdown={setOpenUserDropdown}
                    logoutHandler={logoutHandler}
                  />
                )}
              </div>
            ) : (
              <>
               
                <div className="border-[1px] border-primary-700 px-4 py-[6px] rounded-lg">
                  <Link href="/auth" className="flex gap-2">
                  <FaUser/>
                    <p className="text-sm">ثبت نام / ورود</p>
                  </Link>
                </div>
              </>
            )}

            <Link href="/cart">
              <div className="relative cursor-pointer">
                <IoCart size={24} />
                {cartCount > 0 && (
                  <span className="bg-accent-500 text-white text-[10px] rounded-full w-[18px] h-[18px] flex items-center justify-center absolute -top-[10px] -right-[8px]">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
};

export default Navbar;
