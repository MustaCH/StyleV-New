"use client";

import Link from "next/link";
import { RiHome6Line, RiChat1Line, RiShoppingCart2Line } from "react-icons/ri";
import { TbHanger } from "react-icons/tb";
import { Badge, Switch, Tooltip } from "@nextui-org/react";
import { HiOutlineMoon } from "react-icons/hi2";
import { IoSunnySharp } from "react-icons/io5";
import { useTheme } from "next-themes";

function Sidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="hidden lg:flex flex-col fixed z-50 justify-between bg-gray-100 dark:bg-neutral-900 dark:text-white h-screen w-fit text-3xl px-6 py-6 shadow-2xl">
      <div className="flex flex-col items-center gap-12">
        <Link href={"/"}>
          <h1 className="font-bold tracking-tighter text-4xl">SV.</h1>
        </Link>
        <Tooltip content="Home">
          <Link href={"/"}>
            <RiHome6Line />
          </Link>
        </Tooltip>
        <Tooltip content="Productos">
          <Link href={"/pages/products"}>
            <TbHanger />
          </Link>
        </Tooltip>
        <Tooltip content="Contacto">
          <Link href={"/pages/contact"}>
            <RiChat1Line />
          </Link>
        </Tooltip>
        <Tooltip content="Carrito">
          <Link href={"/pages/cart"}>
            <Badge
              color="danger"
              content={50}
              isInvisible={false}
              shape="circle"
            >
              <RiShoppingCart2Line />
            </Badge>
          </Link>
        </Tooltip>
      </div>
      <div>
        <Switch
          onChange={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
          size="lg"
          color={"default"}
          startContent={<HiOutlineMoon />}
          endContent={<IoSunnySharp />}
        />
      </div>
    </nav>
  );
}

export default Sidebar;
