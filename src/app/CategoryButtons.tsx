import Image from "next/image";

import EarphonesDesktop from "./assets/shared/desktop/image-category-thumbnail-earphones.png";
import HeadphonesDesktop from "./assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersDesktop from "./assets/shared/desktop/image-category-thumbnail-speakers.png";
import Link from "next/link";

const CategoryButtons = ({ onClick }: { onClick?: () => void }) => {
  const ButtonLabels = [
    { label: "HEADPHONES", icon: HeadphonesDesktop, link: "/headphones" },
    { label: "SPEAKERS", icon: SpeakersDesktop, link: "/speakers" },
    { label: "EARPHONES", icon: EarphonesDesktop, link: "/earphones" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 my-20 justify-center gap-20 md:gap-10">
      {ButtonLabels.map((buttons, index) => {
        return (
          <Link href={buttons.link} key={index}>
            <div className="bg-[#F1F1F1] rounded-lg flex flex-col items-center pb-5 hover:scale-105 transition-all cursor-pointer">
              <Image
                src={buttons.icon}
                alt=""
                height={200}
                style={{ marginTop: "-50px" }}
                onClick={onClick}
              />
              <div className="flex flex-col gap-3 items-center tracking-widest">
                <p className="text-md font-semibold">{buttons.label}</p>
                <p className="text-sm text-[#D87D4A]">SHOP</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryButtons;
