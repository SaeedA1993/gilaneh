"use client";
import PopularsList from "./PopularsList";
import Spinner from "@/components/shared/spinner/Spinner";
import useGetPopulars from "@/hooks/queries/products/useGetPopulars";

const Populars = () => {
  const { data: popularsList, isLoading, isError, error } = useGetPopulars();

  return (
    <div className="mb-7 py-4 px-4">
      <h2 className="mb-6 text-primary-800 text-lg font-semibold">
        پرطرفدارترین ها
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

      {popularsList && !isLoading && !isError && (
        <PopularsList populars={popularsList} />
      )}
    </div>
  );
};

export default Populars;
