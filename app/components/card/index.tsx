import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

export default function ProductCard(pic: string) {
  return (
    <Card className="py-4" isPressable>
      <Link href={"category/product"}>
        <CardBody className="overflow-visible py-2">
          <Image
            isBlurred
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://i.ibb.co/H4vWTkx/image.png"
            width={270}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">Set 3 piezas</h4>
          <p className="text-tiny uppercase font-bold">$73,500</p>
          <small className="text-default-500">Envío incluído</small>
        </CardHeader>
      </Link>
    </Card>
  );
}
