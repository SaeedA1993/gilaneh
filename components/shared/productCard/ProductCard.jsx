"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart/cartSlice";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { HiOutlineHeart } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { formatWeight } from "@/utils/formatWeight";
import { FaCartPlus } from "react-icons/fa";

const variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  var formatter = new Intl.NumberFormat("fa-IR");
  const handleAddToCart = () => {
    toast.success("محصول به سبد اضافه شد");
    dispatch(addToCart(product));
  };

  const productImage = product.images[0];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="max-w-[300px] bg-white mx-auto  shadow-md rounded-lg overflow-hidden "
    >
      <div className="relative p-4">
        <Image
          src={productImage}
          width={200}
          height={200}
          className="mx-auto w-[200px] h-[200px] object-cover cursor-pointer "
          alt="product image"
        />
        <div className="absolute py-3 px-3 top-0 left-0 right-0 bottom-0 opacity-0 transition duration-500 hover:opacity-100 bg-black bg-opacity-10">
          <Link href={`/products/${product.id}`}>
            <FaEye size={22} className="text-gray-800 mb-2 cursor-pointer" />
          </Link>

          <HiOutlineHeart size={22} className="text-gray-800 cursor-pointer" />
        </div>
      </div>
      <div className="h-[1px] bg-gray-200"></div>
      <Link href={`/products/${product.id}`}>
        <div className="px-4 py-6">
          <div>
            <h2 className="mb-6 text-gray-700">{product.name}</h2>
          </div>

          <div className=" flex items-center justify-between">
            <h3>
              {formatWeight(product.weight)}
              <span className="mr-1 text-sm text-gray-700">کیلوگرم</span>
            </h3>
            <div className="flex items-center">
              <p className="ml-1 font-semibold text-success-600">
                {formatter.format(product.final_price)}
              </p>
              <p className="text-success-600">تومان</p>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-5 flex w-full justify-center py-2 px-4 rounded-md bg-primary-700 text-white text-sm hover:bg-primary-600 transition duration-300 "
          >
            افزودن به سبد خرید
            <FaCartPlus className="mr-2 text-white" size={20} />
          </button>
        </div>
      </Link>

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
    </motion.div>
  );
};

export default ProductCard;
