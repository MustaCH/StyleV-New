"use client";

import Link from "next/link";
import {
  RiHome6Line,
  RiChat1Line,
  RiShoppingCart2Line,
  RiHome6Fill,
  RiChat1Fill,
  RiShoppingCart2Fill,
} from "react-icons/ri";
import { TbHanger, TbHanger2 } from "react-icons/tb";
import { Badge } from "@nextui-org/react";
import { useCartContext } from "@/app/providers";
import { usePathname } from "next/navigation";

function NavMobile() {
  const { cart } = useCartContext();
  const router = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 z-50 bg-gray-100 dark:bg-neutral-900 shadow-xl flex justify-between w-screen text-3xl px-6 py-4">
      <Link href={"/"}>
        {router === "/" ? <RiHome6Fill /> : <RiHome6Line />}
      </Link>
      <Link href={"/pages/products"}>
        {router === "/pages/products" ? <TbHanger2 /> : <TbHanger />}
      </Link>
      <Link href={"/pages/contact"}>
        {router === "/pages/contact" ? <RiChat1Fill /> : <RiChat1Line />}
      </Link>
      <Link href={"/pages/cart"}>
        <Badge
          color="danger"
          content={cart.length}
          isInvisible={false}
          shape="circle"
        >
          {router === "/pages/cart" ? (
            <RiShoppingCart2Fill />
          ) : (
            <RiShoppingCart2Line />
          )}
        </Badge>
      </Link>
    </nav>
  );
}

export default NavMobile;
