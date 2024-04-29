import { Category } from "../../components";
import { Card, CardFooter, CardHeader, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function AllProducts() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-12">
      <Link href={"products/category"} className="flex justify-center">
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none w-fit group lg:w-[85%]"
        >
          <CardHeader className="absolute z-50 top-1 flex-col gap-1 !items-start ">
            <p className="text-tiny text-white/60 font-bold ">
              Lo que quieras en...
            </p>
            <h4 className="text-white font-medium text-5xl  uppercase">
              Sacos
            </h4>
          </CardHeader>
          <Image
            isBlurred
            alt="Woman listing to music"
            className="object-cover brightness-50"
            src="https://i.ibb.co/H4vWTkx/image.png"
          />
          <CardFooter className="justify-center   overflow-hidden py-1 absolute before:rounded-xl rounded-br-large rounded-bl-large bottom-0 w-full shadow-small  z-10">
            <Button
              className="text-medium text-white bg-black/20 group-hover:bg-white group-hover:text-black dark:group-hover:bg-black dark:group-hover:text-white"
              variant="flat"
              color="default"
              radius="lg"
              size="lg"
            >
              Ver todo
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
