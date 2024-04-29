"use client";

import Link from "next/link";
import { RiHome6Line, RiChat1Line, RiShoppingCart2Line } from "react-icons/ri";
import { TbHanger } from "react-icons/tb";
import { Badge } from "@nextui-org/react";

function NavMobile() {
  return (
    <nav className="lg:hidden fixed bottom-0 z-50 bg-gray-100 dark:bg-neutral-900 shadow-xl flex justify-between w-screen text-3xl px-6 py-4">
      <Link href={"/"}>
        <RiHome6Line />
      </Link>
      <Link href={"/pages/products"}>
        <TbHanger />
      </Link>
      <Link href={"/pages/contact"}>
        <RiChat1Line />
      </Link>
      <Link href={"/pages/cart"}>
        <Badge color="danger" content={50} isInvisible={false} shape="circle">
          <RiShoppingCart2Line />
        </Badge>
      </Link>
    </nav>
  );
}

export default NavMobile;
