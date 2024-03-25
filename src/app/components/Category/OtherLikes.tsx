import Image from "next/image";
import React from "react";
import OrangeButton from "../Buttons/OrangeButton";
import Link from "next/link";
import data from "../../data/data.json";

interface ProductProps {
  product: {
    id: number;
    slug: string;
    name: string;
    category: string;
    others: {
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    }[];
  };
}

const OtherLikes = ({ product }: ProductProps) => {
  function getCategory(slugString: string) {
    const prod = data.find((p) => p.slug === slugString);
    if (prod) {
      return prod.category;
    } else {
      return null;
    }
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold tracking-wide">
        YOU MAY ALSO LIKE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 my-10 justify-center gap-20 md:gap-10">
        {product.others.map((item, index) => {
          return (
            <>
              <div
                className="bg-[#F1F1F1] rounded-lg flex flex-col items-center pb-5 hover:scale-105 transition-all cursor-pointer"
                key={index}
              >
                <Image
                  src={"/" + item.image.desktop}
                  alt=""
                  height={400}
                  width={400}
                />
                <div className="flex flex-col justify-center items-center gap-8">
                  <h2>{item.name}</h2>
                  <Link href={"/" + getCategory(item.slug) + "/" + item.slug}>
                    <OrangeButton />
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default OtherLikes;
