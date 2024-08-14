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
  Divider,
} from "@nextui-org/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import { ProductType } from "@/app/types";
import { useCartContext } from "@/app/providers";

const indexToLetter = (index: number) => String.fromCharCode(65 + index);

export default function Product({
  _id,
  name,
  price,
  pics,
  color,
  measures,
  category,
  quantity,
}: ProductType) {
  const routes = useRouter();
  const { addToCart } = useCartContext();

  return (
    <Card key={_id} className="py-4 w-fit mx-2 lg:mx-0">
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
         {category === 'Calzado' ? <></> : <p className="uppercase">Tabla de medidas:</p>}
         {category !== 'Calzado' ? (
          measures && Object.keys(measures).length > 0 ? (
            <Table aria-label="Tabla de medidas">
              <TableHeader>
                {Object.keys(measures).map((measureKey, index) => (
                  <TableColumn className="text-center" key={measureKey}>
                    {indexToLetter(index)}
                  </TableColumn>
                ))}
              </TableHeader>
              <TableBody>
                <TableRow className="text-center" key="1">
                  {Object.values(measures).map((measureValue, index) => (
                    <TableCell key={indexToLetter(index)}>
                      {measureValue}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          ) : (
            <p>No hay medidas disponibles</p>
          )
         ) : (
          measures && Object.keys(measures).length > 0 ? (
            <p>
              Talle: {Object.values(measures)[0]}
            </p>
          ) : (
            <p>No hay medidas disponibles</p>
          )
         )}
          
          <Button
            onClick={() => {
              addToCart({
                _id,
                name,
                price,
                pics,
                color,
                measures,
                category,
                quantity,
              });
            }}
            color="primary"
            className="hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white"
          >
            Comprar
          </Button>
          <Button
            onClick={() => {
              addToCart({
                _id,
                name,
                price,
                pics,
                color,
                measures,
                category,
                quantity,
              });
            }}
            className="hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white"
          >
            Agregar al carrito
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
