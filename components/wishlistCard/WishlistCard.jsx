"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../shared/spinner/Spinner";
import EmptyWishlist from "./EmptyWishlist";
import AllWishlist from "./AllWishlist";

const WishlistCard = () => {
  const [wishlist, setWishlist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      const { token } = JSON.parse(localStorage.getItem("jwt"));
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wishlists`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const finalData = await result.data.data;
      setWishlist(finalData);
      setLoading(false);
    };
    fetchWishlist();
  }, []);

  return (
    <div className=" p-4 xs:p-5 sm:p-8 md:p-10 ">
      <h1 className="mb-5 text-lg font-semibold">لیست علاقه مندی ها</h1>

      {loading ? (
        <div className="mt-[60px] flex justify-center items-center">
          <Spinner />
        </div>
      ) : wishlist?.length > 0 ? (
        <AllWishlist allWishlist={wishlist} />
      ) : (
        <EmptyWishlist />
      )}
    </div>
  );
};

export default WishlistCard;
