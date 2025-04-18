"use client"
import React from "react";

const WeightFilter = ({ weightData, weightChecked, setWeightChecked }) => {
    const handleWeight = (position) => {
        if (position == 0) {
            setWeightChecked([
            true,
            ...new Array(weightData.length-1).fill(false),
          ]);
        } else {
          const updatedCheckedState = weightChecked.map((item, index) =>
            index === position ? !item : item
          );
          updatedCheckedState[0] = false;
          if (!updatedCheckedState.includes(true)) {
            updatedCheckedState[0] = true;
          }
          setWeightChecked(updatedCheckedState);
        }
      };

  return (
    <div >
      <h3 className="mb-3 font-semibold">وزن بسته</h3>
      <ul>
        {weightData.map((item, index) => {
          return (
            <li key={index} className="mb-2">
              <input
                type="checkbox"
                id={item.name}
                name={item.name}
                value={item.name}
                checked={weightChecked[index]}
                onChange={() => handleWeight(index)}
              />
              <label htmlFor={item.name} className="mr-3">{item.title}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WeightFilter;
