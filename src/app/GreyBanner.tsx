"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TransparentButton from "./components/Buttons/TransparentButton";
import Link from "next/link";

const GreyBanner = () => {
  const [imageSrc, setImageSrc] = useState("");

  const desktopGreyBanner = require("./assets/home/desktop/image-speaker-zx7.jpg");
  const tabletGreyBanner = require("./assets/home/tablet/image-speaker-zx7.jpg");
  const mobileGreyBanner = require("./assets/home/mobile/image-speaker-zx7.jpg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setImageSrc(desktopGreyBanner);
      } else if (window.innerWidth >= 768) {
        setImageSrc(tabletGreyBanner);
      } else {
        setImageSrc(mobileGreyBanner);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [desktopGreyBanner, tabletGreyBanner, mobileGreyBanner]);

  return (
    <div className="relative mb-10">
      <div className="absolute left-10 lg:left-20 top-[35%]">
        <h1 className="text-3xl font-bold tracking-widest mb-5">ZX7 SPEAKER</h1>
        <Link href="/speakers/zx7-speaker">
          <TransparentButton />
        </Link>
      </div>
      <Image src={imageSrc} alt="" className="rounded-lg w-full" />
    </div>
  );
};

export default GreyBanner;
