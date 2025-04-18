"use client";
import React from "react";
import { useSelector } from "react-redux";
import SingleCart from "./SingleCart";

const CartList = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <section className="md:flex-grow md:ml-5 ">
      {cart.map((item,index) => (
        <SingleCart key={index} item={item} />
      ))}
    </section>
  );
};

export default CartList;
