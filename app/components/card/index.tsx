"use client";

import { ProductType } from "@/app/types";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface Props {
  data: ProductType;
}

export default function ProductCard({ data }: Props) {
  return (
    <Card key={data.id} className="py-4" isPressable>
      <CardBody className="overflow-visible py-2">
        <Image
          isBlurred
          alt="Card background"
          className="object-cover rounded-xl"
          src={data.pics[0]}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{data.name}</h4>
        <p className="text-tiny uppercase font-bold">${data.price}</p>
        <small className="text-default-500">Envío incluído</small>
      </CardHeader>
    </Card>
  );
}
