"use client";
import React, { useState } from "react";

interface QCProps {
  quantityCount: number;
  onChange: (newQuantity: number) => void;
}

const QuantityCounter = ({ quantityCount, onChange }: QCProps) => {
  const handleIncrement = () => onChange(quantityCount + 1);
  const handleDecrement = () => {
    if (quantityCount > 1) {
      onChange(quantityCount - 1);
    }
  };

  return (
    <div className="flex flex-row justify-evenly bg-[#F1F1F1] w-[100px] py-4">
      <button onClick={handleDecrement} disabled={quantityCount <= 1}>
        <span
          className={`${quantityCount <= 1 ? "text-slate-300" : "text-black"} `}
        >
          -
        </span>
      </button>
      <span style={{ margin: "0 10px" }}>{quantityCount}</span>
      <button onClick={handleIncrement} disabled={quantityCount >= 10}>
        <span
          className={`${quantityCount >= 10 ? "text-slate-300" : "text-black"}`}
        >
          +
        </span>
      </button>
    </div>
  );
};

export default QuantityCounter;
