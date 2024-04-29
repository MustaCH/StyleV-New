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
} from "@nextui-org/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Product(name: string, price: number, pic: string) {
  const images = [
    {
      original: "https://i.ibb.co/H4vWTkx/image.png",
      thumbnail: "https://i.ibb.co/H4vWTkx/image.png",
      alt: "foto de producto",
    },
    {
      original: "https://i.ibb.co/H4vWTkx/image.png",
      thumbnail: "https://i.ibb.co/H4vWTkx/image.png",
      alt: "foto de producto",
    },
    {
      original: "https://i.ibb.co/H4vWTkx/image.png",
      thumbnail: "https://i.ibb.co/H4vWTkx/image.png",
      alt: "foto de producto",
    },
    {
      original: "https://i.ibb.co/H4vWTkx/image.png",
      thumbnail: "https://i.ibb.co/H4vWTkx/image.png",
      alt: "foto de producto",
    },
  ];

  return (
    <Card className="py-4 w-fit">
      <CardBody className="overflow-visible py-2 flex flex-col gap-4 lg:flex-row lg:gap-12">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="w-full lg:w-[500px]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-fit">
              <Image
                alt={image.alt}
                className="object-cover rounded-xl w-92"
                src={image.original}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-3xl">Saco 3 piezas</h4>
          <small className="text-xl">$85000</small>
          <p>Color: Gris</p>
          <p className="uppercase ">Tabla de medidas:</p>
          <Table aria-label="Tabla de medidas">
            <TableHeader>
              <TableColumn>A</TableColumn>
              <TableColumn>B</TableColumn>
              <TableColumn>C</TableColumn>
              <TableColumn>D</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>60cm</TableCell>
                <TableCell>40cm</TableCell>
                <TableCell>30cm</TableCell>
                <TableCell>70cm</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button className="hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white">
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
