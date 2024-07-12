"use client";

import { CartItem } from "@/app/components";
import { useCartContext } from "@/app/providers";
import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";

export default function Cart() {
  const { cart, clearCart } = useCartContext();
  console.log(cart);

  return (
    <div className=" lg:grid place-content-center">
      <div className="flex flex-col  lg:w-[50vw]  gap-6 lg:gap-0 py-6 ">
        <div className="flex flex-col  gap-4 mb-64 lg:mb-8  w-full">
          {cart.map((item, id) => (
            <CartItem key={id} product={item} />
          ))}
        </div>
        <div className="fixed bottom-14 w-full lg:static flex flex-col gap-8 px-6 py-8 bg-neutral-100 dark:bg-neutral-800 lg:rounded-lg">
          <div className="flex justify-between">
            <p className="text-3xl font-bold">Total:</p>
            <p className="text-2xl dark:text-white/80">
              ${cart.reduce((total, item) => total + item.price, 0)}
            </p>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            <Link
              href="/pages/cart/checkout"
              className="text-center text-white bg-blue-600 py-3 rounded-large"
            >
              Pagar
            </Link>
            <Button onClick={() => clearCart()} color="danger" variant="ghost">
              Vaciar carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
