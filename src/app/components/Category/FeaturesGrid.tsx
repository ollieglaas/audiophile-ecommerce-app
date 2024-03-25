import React from "react";
import ProductTitle from "../ProductTitle";

interface ProductProps {
  product: {
    features: string;
    includes: {
      quantity: number;
      item: string;
    }[];
  };
}

const FeaturesGrid = ({ product }: ProductProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-20">
      <div>
        <ProductTitle title="FEATURES" />
        <p className="text-sm leading-loose text-gray-500 mt-5">
          {product.features}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
        <ProductTitle title="IN THE BOX" />
        <div className="flex flex-col gap-2 mt-4">
          {product.includes.map((item, index) => {
            return (
              <div className="flex flex-row gap-12" key={index}>
                <h1 className="text-[#D87D4A] font-bold">{item.quantity}x</h1>
                <h3 className="font-light">{item.item}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
