"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const PersonBanner = () => {
  const [imageSrc, setImageSrc] = useState("");
  const desktopPerson = require("./assets/shared/desktop/image-best-gear.jpg");
  const tabletPerson = require("./assets/shared/tablet/image-best-gear.jpg");
  const mobilePerson = require("./assets/shared/mobile/image-best-gear.jpg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setImageSrc(desktopPerson);
      } else if (window.innerWidth >= 768) {
        setImageSrc(tabletPerson);
      } else {
        setImageSrc(mobilePerson);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [desktopPerson, tabletPerson, mobilePerson]);

  return (
    <div className="w-full h-auto mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center gap-8 w-100 lg:w-10/12 order-last lg:order-first text-center lg:text-left">
          <h1 className="text-5xl font-semibold">
            BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
            GEAR
          </h1>
          <p className="text-sm leading-loose text-gray-500">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="order-first mb-10 lg:order-last">
          <Image src={imageSrc} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default PersonBanner;
