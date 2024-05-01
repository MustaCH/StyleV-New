import { Card, CardFooter, CardHeader, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function CategoryCard({
  name,
  sub,
  pic,
}: {
  name: string;
  sub: string;
  pic: string;
}) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-fit group lg:w-[85%]"
    >
      <CardHeader className="absolute z-40 top-1 flex-col gap-1 !items-start ">
        {/* {<p className="text-tiny text-white/60 font-bold ">{sub}</p>} */}
        <h4 className="text-white font-medium text-5xl  uppercase">{name}</h4>
      </CardHeader>
      <Image
        isBlurred
        alt={name}
        className="object-cover brightness-50 lg:w-[500px]"
        src={pic}
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
  );
}
