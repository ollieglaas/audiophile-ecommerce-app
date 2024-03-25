import React from "react";

const CategoryHeader = ({ category }: { category: string }) => {
  return (
    <div className="w-100 bg-black h-[200px] flex justify-center items-center">
      <h1 className="text-white text-3xl tracking-widest font-bold">
        {category}
      </h1>
    </div>
  );
};

export default CategoryHeader;
