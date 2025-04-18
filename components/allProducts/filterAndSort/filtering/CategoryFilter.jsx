"use client";
import React from "react";

const CategoryFilter = ({
  categoriesData,
  categoryChecked,
  setCategoryChecked,
}) => {
  const handleCategory = (position) => {
    if (position == 0) {
      setCategoryChecked([
        true,
        ...new Array(categoriesData.length - 1).fill(false),
      ]);
    } else {
      const updatedCheckedState = categoryChecked.map((item, index) =>
        index === position ? !item : item
      );
      updatedCheckedState[0] = false;
      if (!updatedCheckedState.includes(true)) {
        updatedCheckedState[0] = true;
      }
      setCategoryChecked(updatedCheckedState);
    }
  };
  return (
    <div >
      <h3 className="mb-3 font-semibold">دسته بندی</h3>
      <ul>
        {categoriesData.map((item, index) => {
          return (
            <li key={index} className="mb-2">
              <input
                type="checkbox"
                id={item.name}
                name={item.name}
                value={item.name}
                checked={categoryChecked[index]}
                onChange={() => handleCategory(index)}
              />
              <label htmlFor={item.name} className="mr-3">{item.title}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryFilter;
