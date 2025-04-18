import React from "react";
import NoProductFound from "./NoProductFound";
import ProductsList from "./ProductsList";

const ProductsListWrapper = ({ filteredProducts }) => {
  return (
    <>
      {(filteredProducts && filteredProducts.length) > 0 ? (
        <ProductsList filteredData={filteredProducts} />
      ) : (
        <NoProductFound />
      )}
    </>
  );
};

export default ProductsListWrapper;
