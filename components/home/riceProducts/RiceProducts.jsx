"use client";
import React, { useEffect, useState } from "react";
import RiceProductsList from "./RiceProductsList";
import axios from "axios";
import Spinner from "@/components/shared/spinner/Spinner";

const RiceProducts = () => {
  const [riceList, setRiceList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRiceProducts = async () => {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`,
        {
          params: {
            categories: [5, 6],
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const finalData = await result.data.data;
      setRiceList(finalData);
      setLoading(false);
    };
    fetchRiceProducts();
  }, []);

  return (
    <div className="mb-7 py-4 px-4">
      <h2 className="mb-6 text-primary-800 text-lg font-semibold">
        محصولات برنج گیلانه
      </h2>
      {loading ? (
        <div className="mt-[60px] flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <RiceProductsList riceList={riceList} />
      )}
    </div>
  );
};

export default RiceProducts;
