"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { reviewSchema } from "@/validationSchemas/reviewSchema";
import InputErrorMessage from "../shared/customInput/inputErrorMessage/InputErrorMessage";
import StarRating from "./StarRating";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const NewReview = ({ productId }) => {
  const [rating, setRating] = useState(0)
  const reviewSubmitHandler = async (values, actions) => {
    actions.resetForm();
    try {
      const { token } = JSON.parse(localStorage.getItem("jwt"));
      const result = await axios.post(
        `http://localhost:8000/api/products/${productId}/reviews`,
        {
          comment: values.textMessage,
          rating
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      const final = await result.data;
      setRating(0)
      toast.success(final.message);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        textMessage: "",
      },
      validationSchema: reviewSchema,
      onSubmit: reviewSubmitHandler,
    });

  return (
    <div className="my-4">
      <h2 className="mb-3 text-sm">لطفا جهت ثبت نظر خود درباره این محصول، به آن امتیاز داده و توضیحات را تکمیل کنید.</h2>
      <StarRating rating={rating} setRating={setRating}/>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="flex flex-col">
          <label className="text-sm mb-3" htmlFor="textMessage">توضیحات</label>
          <textarea
            className={`border-[1px] py-1 px-2 text-sm text-gray-800 rounded-md outline-none ${
              errors.textMessage && touched.textMessage
                ? " bg-error-100 border-error-600"
                : "bg-white border-gray-300"
            }`}
            value={values.textMessage}
            onChange={handleChange}
            onBlur={handleBlur}
            id="textMessage"
            rows={8}
          />
          {errors.textMessage && touched.textMessage && (
            <InputErrorMessage message={errors.textMessage} />
          )}
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 text-white text-sm bg-info-600 hover:bg-info-500 duration-300 rounded-md"
        >
          ثبت دیدگاه
        </button>
      </form>
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

export default NewReview;
