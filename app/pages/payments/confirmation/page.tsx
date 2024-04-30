"use client";

import { Button, Divider, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UserData {
  id: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  postal: string;
  local: string;
  street: string;
  number: string;
  oth?: string;
}

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  userData: UserData;
  products: Product[];
}

const Confirmation: React.FC = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const routes = useRouter();

  useEffect(() => {
    const orderData = localStorage.getItem("order");
    if (orderData) {
      const parsedOrder = JSON.parse(orderData) as Order;
      setOrder(parsedOrder);
    }
  }, []);

  return (
    <div className="grid place-content-center ">
      {order ? (
        <div className="dark:bg-neutral-900 px-6 py-8 rounded-large">
          <h2 className="text-3xl font-semibold">Compra confirmada!</h2>
          <p className="text-xl">
            Orden: <span className="font-bold">#{order.id}</span>
          </p>
          <Divider className="my-8" />
          <p className="mt-4 text-2xl">Datos de Envío:</p>
          <p>Código Postal: {order.userData.postal}</p>
          <p>Localidad: {order.userData.local}</p>
          <p>Calle: {order.userData.street}</p>
          <p>Número: {order.userData.number}</p>
          {order.userData.oth && <p>Entre calles: {order.userData.oth}</p>}
          <Divider className="my-8" />
          <p className="mt-4">Tu compra:</p>
          <ul>
            {order.products.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
          <Button
            className="w-full mt-8"
            color="primary"
            onClick={() => {
              routes.push("/");
            }}
          >
            Volver a la tienda
          </Button>
        </div>
      ) : (
        <Spinner size="lg" />
      )}
    </div>
  );
};

export default Confirmation;
