"use client";
import { useParams } from "next/navigation";
import React, { useState,useEffect } from "react";
import DetailsCard from "@/components/details/DetailsCard";
import DetailsBreadCrumb from "@/components/details/DetailsBreadCrumb";
import axios from "axios";
import Spinner from "@/components/shared/spinner/Spinner";

const ProductDetails = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const finalData = await result.data.data;
      setSingleProduct(finalData);
      setLoading(false);
    };

    fetchProduct();
  }, []);

  return (
    <div className="mt-[70px] min-h-screen py-4 px-4 md:p-5 lg:p-6 xl:p-8">
      {loading ? (
               <div className="mt-[60px] flex justify-center items-center"><Spinner /></div>

      ) : (
        <>
          <DetailsBreadCrumb
            title={singleProduct.name}
            categoryId={singleProduct.category.parent_id}
            subCat={singleProduct.category.name}
          />
          <DetailsCard product={singleProduct} />
        </>
      )}
    </div>
  );
};

export default ProductDetails;
