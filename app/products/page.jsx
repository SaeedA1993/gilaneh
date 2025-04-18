"use client";
import React, { useEffect, useState } from "react";
import SearchBox from "@/components/allProducts/searchBox/SearchBox";
import FilterSortBox from "@/components/allProducts/filterAndSort/FilterSortBox";
import ProductsListWrapper from "@/components/allProducts/products/ProductsListWrapper";
import TotalFoundProducts from "@/components/allProducts/products/TotalFoundProducts";
import SearchInfo from "@/components/allProducts/searchBox/SearchInfo";
import axios from "axios";
import Spinner from "@/components/shared/spinner/Spinner";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState({
    filterByCategory: ["all"],
    filterByWeight: ["all"],
    searchBy: "",
    sortBy: "created_at",
    sortOrder:'desc'
  });

  useEffect(() => {
    const fetchProducts = async () => {

      const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
        params: {
          categories: queries.filterByCategory.includes("all")? [2,3,5,6]:queries.filterByCategory,
          weights: queries.filterByWeight.includes("all") ? [1,5,10]: queries.filterByWeight ,
          sort_by:queries.sortBy,
          sort_order:queries.sortOrder,
          search_by:queries.searchBy
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const finalData = await result.data.data;
      setFilteredProducts(finalData);
      setLoading(false);
    };

    fetchProducts();
  }, [queries]);

  return (
    <main className="mt-[70px] py-4 px-4 md:p-5 lg:p-6 xl:p-8 ">
      <h2 className="mb-6 text-primary-800 text-lg font-semibold">
        لیست محصولات
      </h2>
      <SearchBox queries={queries} setQueries={setQueries} />
      <FilterSortBox queries={queries} setQueries={setQueries} />
      <div className="mb-6 flex items-center flex-wrap gap-5">
        <SearchInfo searchTerm={queries.searchBy} />
        <TotalFoundProducts count={filteredProducts?.length} />
      </div>
      {loading ? (
         <div className="mt-[60px] flex justify-center items-center"><Spinner /></div>

      ) : (
        <ProductsListWrapper filteredProducts={filteredProducts} />
      )}
    </main>
  );
};

export default Products;
