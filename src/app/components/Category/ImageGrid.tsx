import React from "react";
import Image from "next/image";

interface ProductProps {
  product: {
    gallery: {
      first: {
        desktop: string;
        tablet: string;
        mobile: string;
      };
      second: {
        desktop: string;
        tablet: string;
        mobile: string;
      };
      third: {
        desktop: string;
        tablet: string;
        mobile: string;
      };
    };
  };
}

const ImageGrid = ({ product }: ProductProps) => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4 mb-32">
      <div className="col-span-1 row-span-1">
        <Image
          src={"/" + product.gallery.first.desktop}
          alt=""
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
      <div className="col-span-1 row-span-1">
        <Image
          src={"/" + product.gallery.second.desktop}
          alt=""
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
      <div className="col-span-1 row-span-2">
        <Image
          src={"/" + product.gallery.third.desktop}
          alt=""
          height={690}
          width={690}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
