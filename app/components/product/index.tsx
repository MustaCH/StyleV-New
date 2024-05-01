"use client";

import {
  Card,
  CardBody,
  Image,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import { ProductType } from "@/app/types";

export default function Product({
  id,
  name,
  price,
  pics,
  color,
  measures,
  category,
  quantity,
}: ProductType) {
  const routes = useRouter();

  return (
    <Card key={id} className="py-4 w-fit">
      <CardBody className="overflow-visible py-2 flex flex-col gap-4 lg:flex-row lg:gap-12">
        {pics ? (
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="w-full lg:w-[500px]"
          >
            {pics.map((image, index) => (
              <SwiperSlide key={index} className="w-fit">
                <Image
                  alt={name}
                  className="object-cover rounded-xl w-92"
                  src={image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Spinner />
        )}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-3xl">{name}</h4>
          <p className="text-xl">${price}</p>
          <p className="capitalize text-xs">Color: {color}</p>
          <p className="uppercase ">Tabla de medidas:</p>
          <Table aria-label="Tabla de medidas">
            <TableHeader>
              {Object.keys(measures).map((measureKey) => (
                <TableColumn key={measureKey}>{measureKey}</TableColumn>
              ))}
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                {Object.values(measures).map((measureValue) => (
                  <TableCell key={measureValue}>{measureValue}</TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
          <Button
            onClick={() => {
              routes.push("/pages/cart");
            }}
            color="primary"
            className="hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white"
          >
            Comprar
          </Button>
          <Button className="hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white">
            Agregar al carrito
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
