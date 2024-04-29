"use client";

import HeaderCarousel from "../header-carousel";
import { Switch } from "@nextui-org/react";
import { HiOutlineMoon } from "react-icons/hi2";
import { IoSunnySharp } from "react-icons/io5";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();
  const slides = [
    {
      url: "https://i.ibb.co/S6V97QY/image.png",
    },
    {
      url: "https://i.ibb.co/8sQKfqK/image.png",
    },
    {
      url: "https://i.ibb.co/H4vWTkx/image.png",
    },
  ];

  return (
    <div className="relative">
      <p className="absolute z-50 text-5xl lg:text-7xl font-semibold uppercase text-white dark:text-gray-200 ps-6 lg:ps-10 pt-12 drop-shadow-2xl">
        Style
        <br /> Vintage.
      </p>
      <HeaderCarousel slides={slides} />
      <div className="lg:hidden relative">
        <Switch
          className={"fixed top-4 right-2"}
          onChange={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
          size="lg"
          color={"default"}
          startContent={<HiOutlineMoon />}
          endContent={<IoSunnySharp />}
        />
      </div>
    </div>
  );
}

export default Header;
