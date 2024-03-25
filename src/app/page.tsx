import HeroImage from "./assets/home/desktop/image-hero.jpg";
import TabletHero from "./assets/home/tablet/image-header.jpg";
import MobileHero from "./assets/home/mobile/image-header.jpg";

import Image from "next/image";
import OrangeButton from "./components/Buttons/OrangeButton";
import OrangeBanner from "./OrangeBanner";
import CategoryButtons from "./CategoryButtons";
import GreyBanner from "./GreyBanner";
import EarphonesBanner from "./EarphonesBanner";
import PersonBanner from "./PersonBanner";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image src={HeroImage} alt="" className="hidden lg:block" />
        <Image src={TabletHero} alt="" className="hidden lg:hidden md:block" />
        <Image
          src={MobileHero}
          alt=""
          className="lg:hidden md:hidden sm:block"
        />
        <div className="absolute lg:w-2/5 md:w-1/2 w-4/5 top-1/2 lg:left-1/4 md:left-1/4 left-20 transform lg:-translate-x-1/2 -translate-y-1/2 text-white lg:text-left text-center">
          <h1
            className="text-gray-400 text-sm mb-5"
            style={{ letterSpacing: "0.5rem" }}
          >
            NEW PRODUCT
          </h1>
          <h1 className="text-6xl font-semibold mb-5">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-gray-300 text-sm mb-5 lg:w-2/3 sm:w-full tracking-wider">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="/headphones/xx99-mark-two-headphones">
            <OrangeButton />
          </Link>
        </div>
      </div>
      <div className="px-16 xl:px-72">
        <CategoryButtons />
        <OrangeBanner />
        <GreyBanner />
        <EarphonesBanner />
        <PersonBanner />
      </div>
    </>
  );
}
