import React from "react";
import data from "../../data/data.json";
import CategoryButtons from "@/app/CategoryButtons";
import PersonBanner from "@/app/PersonBanner";
import FeaturesGrid from "@/app/components/Category/FeaturesGrid";
import ImageGrid from "@/app/components/Category/ImageGrid";
import OtherLikes from "@/app/components/Category/OtherLikes";
import ProductGrid from "@/app/components/Category/ProductGrid";

const SpeakersPage = ({ params }: { params: { slug: string } }) => {
  const product = data.find((item) => item.slug === params.slug);

  if (!product) {
    return <h1>Product not found.</h1>;
  }

  return (
    <>
      <div className="w-100 my-20 px-8 md:px-12 lg:px-44">
        <ProductGrid product={product} />
        <FeaturesGrid product={product} />
        <ImageGrid product={product} />
        <OtherLikes product={product} />
        <div className="my-40">
          <CategoryButtons />
        </div>
        <PersonBanner />
      </div>
    </>
  );
};

export default SpeakersPage;
