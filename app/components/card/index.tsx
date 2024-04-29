"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

export default function ProductCard({
  name,
  price,
  pic,
}: {
  name: string;
  price: number;
  pic: string;
}) {
  return (
    <Card className="py-4" isPressable>
      <Link href={"category/product"}>
        <CardBody className="overflow-visible py-2">
          <Image
            isBlurred
            alt="Card background"
            className="object-cover rounded-xl"
            src={pic}
            width={270}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{name}</h4>
          <p className="text-tiny uppercase font-bold">${price}</p>
          <small className="text-default-500">Envío incluído</small>
        </CardHeader>
      </Link>
    </Card>
  );
}
