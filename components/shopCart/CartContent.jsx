import React from "react";
import CartList from "./CartList";
import CartCost from "./CartCost";

const CartContent = ({ quantity, totalCost, weightSum }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-start ">
      <CartList />
      <CartCost
        quantity={quantity}
        totalCost={totalCost}
        weightSum={weightSum}
      />
    </div>
  );
};

export default CartContent;
