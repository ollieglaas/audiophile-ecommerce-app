import React from "react";
import Image from "next/image";
import { HeaderLinks, HeaderLogo } from "./Header";
import FacebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import TwitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import InstagramIcon from "../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="w-100 mt-20 bg-black text-white px-10 lg:px-32 py-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="py-4 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <HeaderLogo />
      </div>
      <div className="py-4 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <HeaderLinks />
      </div>
      <div className="py-4 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <p className="text-sm text-gray-400">
          Audiophile is an all in one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we are open 7 days a week.
        </p>
      </div>
      <div className="py-4 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <SocialLinks />
      </div>
      <div className="py-4 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <p className="text-sm text-gray-400">
          Copyright 2021. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex flex-row space-x-6 lg:justify-end md:justify-start">
      <a href="http://facebook.com">
        <Image src={FacebookIcon} alt="" />
      </a>
      <a href="http://twitter.com">
        <Image src={TwitterIcon} alt="" />
      </a>
      <a href="http://instagram.com">
        <Image src={InstagramIcon} alt="" />
      </a>
    </div>
  );
};

export default Footer;
