import React from "react";

const TransparentButton = () => {
  return (
    <button className="bg-transparent border border-black px-6 py-3 text-black hover:bg-black hover:text-white">
      <p className="text-xs tracking-widest font-medium">SEE PRODUCT</p>
    </button>
  );
};

export default TransparentButton;
