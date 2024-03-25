"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TransparentButton from "./components/Buttons/TransparentButton";
import Link from "next/link";

const EarphonesBanner = () => {
  const [imageSrc, setImageSrc] = useState("");
  const dekstopEarphones = require("./assets/home/desktop/image-earphones-yx1.jpg");
  const tabletEarphones = require("./assets/home/tablet/image-earphones-yx1.jpg");
  const mobileEarphones = require("./assets/home/mobile/image-earphones-yx1.jpg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setImageSrc(dekstopEarphones);
      } else if (window.innerWidth >= 768) {
        setImageSrc(tabletEarphones);
      } else {
        setImageSrc(mobileEarphones);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dekstopEarphones, tabletEarphones, mobileEarphones]);

  return (
    <div className="w-full h-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Image src={imageSrc} alt="" className="rounded-lg" />
        </div>
        <div className="bg-[#F1F1F1] rounded-lg flex justify-center">
          <div className="flex flex-col justify-center items-start h-full w-2/3 sm: py-16">
            <h1 className="text-3xl font-bold tracking-widest mb-5">
              YX1 EARPHONES
            </h1>
            <Link href="/earphones/yx1-earphones">
              <TransparentButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarphonesBanner;
