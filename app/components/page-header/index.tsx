"use client";

import { HiOutlineMoon } from "react-icons/hi2";
import { IoSunnySharp } from "react-icons/io5";
import { Divider, Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageHeader() {
  const { theme, setTheme } = useTheme();
  const router = usePathname();
  const [route, setRoute] = useState("");

  useEffect(() => {
    if (router === "/pages/products") {
      setRoute("Productos.");
    } else if (router === "/pages/contact") {
      setRoute("Contacto.");
    } else if (router === "/pages/cart") {
      setRoute("Carrito.");
    } else if (router === "/pages/category") {
      setRoute("Productos.");
    } else {
      setRoute("");
    }
  }, [router]);

  return (
    <div>
      <div className="relative flex flex-col items-center lg:flex-row lg:justify-between lg:items-end px-12">
        <p className="text-3xl lg:text-7xl  font-semibold uppercase text-black dark:text-gray-200  py-12 lg:pb-0 drop-shadow-2xl">
          Style
          <br /> Vintage.
        </p>
        <Switch
          className={"absolute top-4 right-2 lg:hidden"}
          onChange={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
          size="lg"
          color={"default"}
          startContent={<HiOutlineMoon />}
          endContent={<IoSunnySharp />}
        />

        <Divider className="mb-4 lg:hidden" />
        <p className="text-4xl uppercase lg:capitalize lg:text-5xl font-semibold tracking-tighter	">
          {route}
        </p>
      </div>
      <Divider className="my-4 hidden lg:flex" />
    </div>
  );
}
