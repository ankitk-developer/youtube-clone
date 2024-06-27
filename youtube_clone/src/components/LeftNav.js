import React from "react";
import { categories } from "../utils/constants";
const LeftNav = () => {
  return (
    <div>
      <div className="w-[17%] bg-black">
        {categories.map((category, index) => {
          return (
            <div
              key={category.name}
              className="flex gap-4 py-3 px-5 items-center text-white cursor-pointer hover:bg-slate-800"
            >
              <div className="text-lg">{category.icon}</div>
              <div>{category.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;
