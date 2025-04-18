"use client";
import React, { useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/validationSchemas/loginSchema";
import InputBox from "../shared/customInput/inputBox/InputBox";
import AuthContext from "@/context/AuthContext";
import useLogin from "@/hooks/mutations/auth/useLogin";

const LoginForm = () => {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);
  const loginMutation = useLogin();

  const loginHandler = async (values, actions) => {
    actions.resetForm();
    try {
      const { id, name, email, role, access_token, refresh_token } =
        await loginMutation.mutateAsync({
          email: values.email,
          password: values.password,
        });

      setUser({
        id,
        name,
        email,
        role,
      });

      localStorage.setItem(
        "jwt",
        JSON.stringify({
          access_token,
          refresh_token,
        })
      );
      router.push("/");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: loginHandler,
    });

  let loginProperties = [
    {
      idx: 1,
      labelText: "ایمیل",
      labelId: "email",
      inputType: "email",
      value: values.email,
      error: errors.email,
      touchCheck: touched.email,
    },
    {
      idx: 2,
      labelText: "رمز عبور",
      labelId: "password",
      inputType: "password",
      value: values.password,
      error: errors.password,
      touchCheck: touched.password,
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        {loginProperties.map(
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
          disabled={loginMutation.isLoading}
          className="bg-info-600 hover:bg-info-500 mt-2 duration-300 text-white text-sm w-full px-4 py-2 rounded-md"
        >
          ورود به حساب
        </button>
      </form>
    </>
  );
};

export default LoginForm;
