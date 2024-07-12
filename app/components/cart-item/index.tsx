import React from "react";
import { User, Chip, Button } from "@nextui-org/react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useCartContext } from "@/app/providers";
import { ProductType } from "@/app/types";

export default function CartItem({ product }: { product: ProductType }) {
  const { deleteProduct } = useCartContext();

  const { id, name, pics, price } = product;

  return (
    <div className="relative flex items-center justify-between mx-2 px-4 py-3  bg-neutral-100 dark:bg-neutral-700 rounded-lg drop-shadow-md">
      <Button
        onClick={() => deleteProduct(id)}
        className="absolute top-[-25%] right-0 rounded-full w-3"
        isIconOnly
        size="sm"
        color="danger"
        aria-label="Close"
      >
        <IoMdClose />
      </Button>
      <User
        name={name}
        description={
          <Link
            href={{
              pathname: "product",
              query: { _id: product._id },
            }}
            className="text-blue-500"
          >
            Ver producto
          </Link>
        }
        avatarProps={{
          src: pics && pics.length > 0 ? pics[0] : undefined,
        }}
      />
      <Chip
        className="bg-neutral-700 text-white dark:bg-neutral-300 dark:text-black"
        size="lg"
      >
        ${price}
      </Chip>
    </div>
  );
}
