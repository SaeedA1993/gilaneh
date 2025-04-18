"use client";
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signupSchema } from "@/validationSchemas/signupSchema";
import InputBox from "../shared/customInput/inputBox/InputBox";

const SignupForm = () => {
  const router = useRouter();
  const signupHandler = async (values, actions) => {
    actions.resetForm();
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
        {
          name:values.name,
          email:values.email,
          password:values.password,
          password_confirmation: values.confirmPassword,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const final = await result.data;
      router.push("login");
    } catch (error) {
      console.log(error.response.data);
    }

  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signupSchema,
      onSubmit: signupHandler,
    });

  let signUpProperties = [
    {
      idx: 1,
      labelText: "نام",
      labelId: "name",
      inputType: "text",
      value: values.name,
      error: errors.name,
      touchCheck: touched.name,
    },

    {
      idx: 2,
      labelText: "ایمیل",
      labelId: "email",
      inputType: "email",
      value: values.email,
      error: errors.email,
      touchCheck: touched.email,
    },
    {
      idx: 3,
      labelText: "رمز عبور",
      labelId: "password",
      inputType: "password",
      value: values.password,
      error: errors.password,
      touchCheck: touched.password,
    },
    {
      idx: 4,
      labelText: "تکرار رمز عبور",
      labelId: "confirmPassword",
      inputType: "password",
      value: values.confirmPassword,
      error: errors.confirmPassword,
      touchCheck: touched.confirmPassword,
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        {signUpProperties.map(
          ({
            idx,
            labelText,
            labelId,
            inputType,
            value,
            error,
            touchCheck,
          }) => (
            <InputBox
              key={idx}
              labelText={labelText}
              labelId={labelId}
              inputType={inputType}
              value={value}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={error}
              touchCheck={touchCheck}
            />
          )
        )}

        <button
          type="submit"
          className="bg-info-600 hover:bg-info-500 mt-2 duration-300 text-white text-sm w-full px-4 py-2 rounded-md"
        >
          ثبت نام
        </button>
      </form>
    </>
  );
};

export default SignupForm;
