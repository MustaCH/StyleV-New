import React from "react";
import { User, Chip, Button } from "@nextui-org/react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useCartContext } from "@/app/providers";
import { ProductType } from "@/app/types";

export default function CheckoutItem({ product }: { product: ProductType }) {
  const { id, name, pics, price } = product;

  return (
    <div className="relative flex items-center justify-between mx-2 px-4 py-3  bg-transparent ">
      <User
        name={name}
        avatarProps={{
          src: pics && pics.length > 0 ? pics[0] : undefined,
        }}
      />
      <Chip className="bg-transparent" size="lg">
        ${price}
      </Chip>
    </div>
  );
}
