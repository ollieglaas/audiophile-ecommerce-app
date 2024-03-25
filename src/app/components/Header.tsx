"use client";
import React, { useRef } from "react";
import Image from "next/image";
import burgerImage from "../assets/shared/tablet/icon-hamburger.svg";
import Logo from "../assets/shared/desktop/logo.svg";
import Link from "next/link";
import CartModal from "./Cart/CartModal";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import CategoryButtons from "../CategoryButtons";

const Header = () => {
  return (
    <div className="w-100 flex flex-row py-6 px-10 lg:px-32 bg-black text-white justify-between items-center border-b border-slate-800">
      <div className="hidden sm:flex flex-row space-x-12 items-center">
        <div className="lg:hidden block">
          <HeaderBurger />
        </div>
        <div>
          <HeaderLogo />
        </div>
      </div>

      <div className="block sm:hidden">
        <HeaderBurger />
      </div>

      <div className="block sm:hidden">
        <HeaderLogo />
      </div>

      <div className="hidden lg:block">
        <HeaderLinks />
      </div>

      <CartModal />
    </div>
  );
};

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <Image src={Logo} alt="" />
    </Link>
  );
};

export const HeaderLinks = () => {
  return (
    <nav className="flex flex-row space-x-12 justify-evenly text-sm tracking-widest font-semibold">
      <Link href="/" className="hover:text-[#D87D4A]">
        HOME
      </Link>
      <Link href="/headphones" className="hover:text-[#D87D4A]">
        HEADPHONES
      </Link>
      <Link href="/speakers" className="hover:text-[#D87D4A]">
        SPEAKERS
      </Link>
      <Link href="/earphones" className="hover:text-[#D87D4A]">
        EARPHONES
      </Link>
    </nav>
  );
};

const HeaderBurger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button className="cursor-pointer" variant="link" onClick={onOpen}>
        <Image src={burgerImage} alt="" />
      </Button>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <CategoryButtons onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
