"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import WhiteButton from "./components/Buttons/WhiteButton";
import Link from "next/link";

const OrangeBanner = () => {
  const [imageSrc, setImageSrc] = useState("");

  const desktopBanner = require("./assets/home/desktop/image-speaker-zx9.png");
  const tabletBanner = require("./assets/home/tablet/image-speaker-zx9.png");
  const mobileBanner = require("./assets/home/mobile/image-speaker-zx9.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setImageSrc(desktopBanner);
      } else if (window.innerWidth >= 768) {
        setImageSrc(tabletBanner);
      } else {
        setImageSrc(mobileBanner);
      }
    };

    // Set initial image source on component mount
    handleResize();

    // Event listener to update image source on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [desktopBanner, tabletBanner, mobileBanner]);

  return (
    <div className="w-full h-auto rounded-lg bg-[#D87D4A] px-8 lg:px-32 pt-28 pb-16 mb-10">
      <div className="flex flex-col gap-16 items-center lg:grid lg:grid-cols-2 lg:gap-8">
        <Image src={imageSrc} alt="" height={350} />
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-semibold mb-5 text-white">
            ZX9 SPEAKER
          </h1>
          <p className="text-[#F3F3F3] font-light mb-5">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/speakers/zx9-speaker">
            <WhiteButton reverseColor />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrangeBanner;
