"use client"
import TeaProductsList from "./TeaProductsList";
import Spinner from "@/components/shared/spinner/Spinner";
import useGetTeaList from "@/hooks/queries/products/useGetTeaList";

const TeaProducts = () => {

  const { data: teaList, isLoading, isError, error } = useGetTeaList();
  

  return (
    <div className="mb-7 py-4 px-4">
      <h2 className="mb-6 text-primary-800 text-lg font-semibold">
        محصولات چای گیلانه
      </h2>
     {isLoading && (
        <div className="mt-[60px] flex justify-center items-center">
          <Spinner />
        </div>
      )}

      {isError && (
        <div className="mt-4 text-red-500 text-center">
          Error: {error.message}
        </div>
      )}

      {teaList && !isLoading && !isError && (
        <TeaProductsList teaList={teaList} />
      )}
    </div>
  );
};

export default TeaProducts;
