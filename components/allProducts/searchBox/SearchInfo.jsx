import React from "react";

const SearchInfo = ({ searchTerm }) => {
  return (
    <div className="flex items-center text-sm">
      <p className="ml-2">نتیجه جستجو برای</p>
      <p className="text-sm font-semibold">{`"${searchTerm}"  :`}</p>
    </div>
  );
};

export default SearchInfo;
