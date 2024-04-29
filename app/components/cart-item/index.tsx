import React from "react";
import { User, Link, Chip, Button } from "@nextui-org/react";
import { IoMdClose } from "react-icons/io";

export default function CartItem() {
  return (
    <div className="relative flex items-center justify-between mx-2 px-4 py-3  bg-neutral-100 dark:bg-neutral-700 rounded-lg drop-shadow-md">
      <Button
        className="absolute top-[-25%] right-0 rounded-full w-3"
        isIconOnly
        size="sm"
        color="danger"
        aria-label="Close"
      >
        <IoMdClose />
      </Button>
      <User
        name="Set 3 piezas"
        description={
          <Link href="/" size="sm">
            Ver producto
          </Link>
        }
        avatarProps={{
          src: "https://i.ibb.co/H4vWTkx/image.png",
        }}
      />
      <Chip
        className="bg-neutral-700 text-white dark:bg-neutral-300 dark:text-black"
        size="lg"
      >
        $85000
      </Chip>
    </div>
  );
}
