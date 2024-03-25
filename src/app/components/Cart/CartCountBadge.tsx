import React from "react";

const CartCountBadge = ({ cartCount }: { cartCount: number }) => {
  return (
    <div className="bg-red-500 rounded-full w-3 h-3 p-2 flex items-center justify-center text-white text-xs">
      {cartCount}
    </div>
  );
};

export default CartCountBadge;
