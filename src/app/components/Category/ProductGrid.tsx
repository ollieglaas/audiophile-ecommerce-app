"use client";
import React, { useState } from "react";
import Image from "next/image";
import QuantityCounter from "@/app/components/QuantityCounter";
import OrangeButton from "../Buttons/OrangeButton";
import ProductTitle from "../ProductTitle";
import NewProductLabel from "./NewProductLabel";
import { useCart } from "@/app/hooks/CartContext";
import { useToast } from "@chakra-ui/react";

interface ProductProps {
  product: {
    name: string;
    description: string;
    new: boolean;
    price: number;
    image: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };
}

const ProductGrid = ({ product }: ProductProps) => {
  const { addItem, idCounter, cart } = useCart();
  const [quantityCount, setQuantityCount] = useState(1);
  const toast = useToast();

  const handleAddToCart = () => {
    addItem({
      id: idCounter,
      name: product.name,
      price: product.price,
      image: product.image.desktop,
      quantity: quantityCount,
    });
    toast({
      title: "Item added.",
      description: product.name + " has been added to your cart.",
      status: "success",
      duration: 5000,
      isClosable: true,
      variant: "subtle",
    });
  };

  const handleChangeQuantity = (newQuantity: number) => {
    setQuantityCount(newQuantity);
  };

  const itemExists = cart.some((item) => item.name === product.name);

  return (
    <div className="grid grid-cols-1 mb-20 md:grid-cols-2 gap-8 lg:gap-24">
      <div
        className={`bg-[#F1F1F1] flex justify-center items-center rounded-lg`}
      >
        <Image
          src={"/" + product.image.desktop}
          alt=""
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col justify-center gap-5 text-center lg:text-left">
        {product.new && <NewProductLabel />}
        <ProductTitle title={product.name.toUpperCase()} />
        <p className="text-sm leading-loose text-gray-500">
          {product.description}
        </p>
        <h1 className="font-bold tracking-widest my-5">${product.price}</h1>
        <div className="flex flex-row justify-center lg:justify-start gap-8">
          <QuantityCounter
            quantityCount={quantityCount}
            onChange={handleChangeQuantity}
          />
          <OrangeButton
            customText="ADD TO CART"
            onClick={handleAddToCart}
            disabled={itemExists}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
