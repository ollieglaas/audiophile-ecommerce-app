import React from "react";
import Image from "next/image";

interface ItemProps {
  item: {
    name: string;
    image: string;
    price: number;
  };
  compact?: boolean;
}

function formatProductName(inputString: string): string {
  const words = inputString.trim().split(/\s+/);
  words.pop();
  const newString = words.join(" ");
  return newString;
}

const CartItemInfo = ({ item, compact }: ItemProps) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="bg-[#F1F1F1] rounded-xl">
        <Image
          src={"/" + item.image}
          alt=""
          height={60}
          width={60}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-evenly items-start">
        <p className={`${compact ? "text-sm" : "text-md"} font-bold`}>
          {formatProductName(item.name)}
        </p>
        <p
          className={`${
            compact ? "text-sm" : "text-md"
          } text-gray-400 tracking-widest`}
        >
          $ {item.price}
        </p>
      </div>
    </div>
  );
};

export default CartItemInfo;
