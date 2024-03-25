import React from "react";

const WhiteButton = ({ reverseColor }: { reverseColor: boolean }) => {
  const bg = reverseColor ? "bg-black" : "bg-white";
  const bgHover = reverseColor ? "hover:bg-white" : "hover:bg-black";
  const textColor = reverseColor ? "text-white" : "text-black";
  const textHover = reverseColor ? "hover:text-black" : "hover:text-white";

  return (
    <button className={`px-6 py-3 ${bg} ${textColor} ${bgHover} ${textHover}`}>
      <p className="text-xs tracking-widest font-medium">SEE PRODUCT</p>
    </button>
  );
};

export default WhiteButton;
