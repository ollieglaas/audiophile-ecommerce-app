import React from "react";

const OrangeButton = ({
  customText,
  onClick,
  takeUpFullWidth,
  disabled,
}: {
  customText?: string;
  onClick?: () => void;
  takeUpFullWidth?: boolean;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`bg-[#D87D4A] px-6 py-3 ${!disabled && "cursor-pointer"} ${
        disabled && "opacity-50"
      } hover:opacity-50 text-white ${takeUpFullWidth && "w-full"}`}
      onClick={onClick}
      disabled={disabled}
    >
      <p className="text-xs tracking-widest font-medium">
        {disabled ? "ITEM ADDED" : customText || "SEE PRODUCT"}
      </p>
    </button>
  );
};

export default OrangeButton;
