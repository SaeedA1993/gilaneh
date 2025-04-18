"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartContent from "./CartContent";
import EmptyCart from "./EmptyCart";

const CartWrapper = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const getTotal = (cartItem) => {
    let totalQuantity = 0;
    let totalPrice = 0;
    let totalWeight = 0;
    cartItem.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
      totalWeight += item.quantity * item.weight;
    });
    return { totalPrice, totalQuantity, totalWeight };
  };

  const quantity = getTotal(cart).totalQuantity;
  const totalCost = getTotal(cart).totalPrice;
  const weightSum = getTotal(cart).totalWeight;
  return (
    <div>
      {quantity > 0 ? (
        <CartContent
          quantity={quantity}
          totalCost={totalCost}
          weightSum={weightSum}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartWrapper;
