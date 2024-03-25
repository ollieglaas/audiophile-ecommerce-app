import React from "react";
import Image from "next/image";
import data from "../data/data.json";
import CategoryHeader from "../components/CategoryHeader";
import CategoryButtons from "../CategoryButtons";
import PersonBanner from "../PersonBanner";
import OrangeButton from "../components/Buttons/OrangeButton";
import NewProductLabel from "../components/Category/NewProductLabel";
import ProductTitle from "../components/ProductTitle";
import Link from "next/link";

const filteredCategories = data.filter((item) => item.category === "speakers");

const sortedCategories = filteredCategories.sort((a, b) => b.id - a.id); // reverses order based on ID

const SpeakersPage = () => {
  return (
    <>
      <CategoryHeader category="SPEAKERS" />
      <div className="w-100 px-8 md:px-12 lg:px-56">
        {sortedCategories.map((item) => {
          const oddId = item.id % 2 === 0;
          const orderStyle = oddId ? "order-first" : "order-last";

          return (
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 my-20"
              key={item.id}
            >
              <div
                className={`bg-[#F1F1F1] flex justify-center items-center rounded-lg lg:${orderStyle}`}
              >
                <Image
                  src={"/" + item.categoryImage.desktop}
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="flex flex-col justify-center gap-5 text-center lg:text-left">
                {item.new && <NewProductLabel />}
                <ProductTitle title={item.name.toUpperCase()} />
                <p className="text-sm leading-loose text-gray-500">
                  {item.description}
                </p>
                <div>
                  <Link href={"/speakers/" + item.slug}>
                    <OrangeButton />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <div className="my-40">
          <CategoryButtons />
        </div>
        <div>
          <PersonBanner />
        </div>
      </div>
    </>
  );
};

export default SpeakersPage;
