"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import ProductDetailTags from "./ProductDetailTags";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./productDescription";
import axios from "axios";
import { TbHeartPlus } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa";

const DetailsContent = ({ data }) => {
  var formatter = new Intl.NumberFormat("fa-IR");
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    toast.success("محصول به سبد اضافه شد");
    dispatch(addToCart(data));
  };

  const addToWishlist = async () => {
    try {
      const { token } = JSON.parse(localStorage.getItem("jwt"));

      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wishlists/${data.id}`,
        {},
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white py-4 px-4 rounded-md shadow-md md:p-5 lg:p-6 lg:col-span-3 xl:p-8 ">
      <ProductDetailTags
        categoryId={data.category.parent_id}
        subCategory={data.category.name}
      />
      <h2 className="mb-3">{data.name}</h2>
      <ProductInfo weight={data.weight} price={formatter.format(data.price)} />
      <ProductDescription description={data.description} />
      <div className="flex items-center ">
        <button
          onClick={handleAddToCart}
          className="flex ml-2 py-2 px-4 rounded-md bg-accent-700 text-white text-sm hover:bg-accent-600 transition duration-300 "
        >
          افزودن به سبد خرید
          <FaCartPlus className="mr-2 text-white" size={20} />
        </button>
        <button
          onClick={addToWishlist}
          className="flex ml-2 py-2 px-4 rounded-md border border-accent-700 text-accent-700 text-sm hover:bg-accent-100 transition duration-300"
        >
          افزودن به علاقه مندی ها
          <TbHeartPlus className="mr-2" color="text-accent-700" size={20} />
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default DetailsContent;
