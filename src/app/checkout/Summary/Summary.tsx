"use client";
import OrangeButton from "@/app/components/Buttons/OrangeButton";
import CartItemInfo from "@/app/components/Cart/CartItemInfo";
import { useCart } from "@/app/hooks/CartContext";
import React from "react";

const Summary = ({ onSubmit }: { onSubmit: () => void }) => {
  const { cart, totalCost } = useCart();
  const vat = 0.2 * totalCost!;
  const shipping = totalCost! >= 1000 ? 0 : 50;
  const finalCost = totalCost! + shipping;

  return (
    <>
      <h1 className="font-bold text-xl tracking-wider mb-5">SUMMARY</h1>
      {cart.map((item) => {
        return (
          <div className="grid grid-cols-2 mb-4 items-center" key={item.id}>
            <CartItemInfo item={item} compact />
            <p className="flex justify-end  font-semibold">x {item.quantity}</p>
          </div>
        );
      })}
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex flex-row justify-between items-center">
          <p className="text-slate-500">TOTAL</p>
          <p className="font-bold">$ {totalCost?.toLocaleString()}</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-slate-500">SHIPPING</p>
          <p className="font-bold">$ {shipping}</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-slate-500">VAT (INCLUDED)</p>
          <p className="font-bold">
            ${" "}
            {vat.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center mt-5 mb-10">
          <p className="text-slate-500">GRAND TOTAL</p>
          <p className="font-bold text-[#D87D4A]">
            ${" "}
            {finalCost?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>

      <OrangeButton
        customText="CONTINUE & PAY"
        takeUpFullWidth
        onClick={onSubmit}
      />
    </>
  );
};

export default Summary;
