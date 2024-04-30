"use client";

import React, { useState } from "react";
import { Button, Divider, Input } from "@nextui-org/react";
import { useCartContext } from "@/app/providers";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { MercadoPagoButton } from "@/app/components/mp-button";
import { Product } from "@/app/components";

export default function Checkout() {
  initMercadoPago("YOUR_PUBLIC_KEY", {
    locale: "es-AR",
  });
  const routes = useRouter();
  const { cart } = useCartContext();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    id: "",
    email: "",
    phone: "",
    postal: "",
    local: "",
    street: "",
    number: "",
    oth: "",
  });
  const [formValidity, setFormValidity] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    // Validar los campos antes de continuar
    const isValid = validateForm();
    if (isValid) {
      // Si los campos son válidos, continuar con el pago
      const userData = { ...formData };
      const data = {
        userData,
        cart,
      };
      createOrder(data);
      routes.push("/pages/payments/confirmation");
      // Aquí podrías redirigir al usuario a la pasarela de pago externa
    } else {
      alert("Todos los campos obligatorios deben ser completados.");
    }
  };

  const validateForm = () => {
    // Verificar que todos los campos obligatorios estén completos
    const isValid = Object.values(formData).every(isFieldValid);
    setFormValidity(isValid);
    return isValid;
  };

  const isFieldValid = (value: string) => {
    return value.trim() !== "";
  };

  function generateOrderID(): string {
    let orderID = localStorage.getItem("orderID");
    let counter = localStorage.getItem("orderCounter");

    if (!orderID || !counter) {
      orderID = "AAA000";
      counter = "0";
    } else {
      let numericCounter = parseInt(counter, 10);
      numericCounter++;
      counter = numericCounter.toString().padStart(3, "0");
      orderID = `AAA${counter}`;
    }

    localStorage.setItem("orderID", orderID);
    localStorage.setItem("orderCounter", counter);

    return orderID;
  }

  function createOrder(data: any) {
    const orderID = generateOrderID();
    const order = {
      id: orderID,
      userData: data.userData,
      products: data.cart,
    };
    console.log("Orden de Pedido:");
    console.log(order); // Imprimir la orden por consola
    localStorage.setItem("order", JSON.stringify(order));
  }

  return (
    <div className="lg:grid place-content-center my-10">
      <h2 className="text-center text-3xl uppercase font-semibold">Checkout</h2>
      <Divider className="mt-4" />
      <div className="flex flex-col gap-4 my-8 mx-2 lg:mx-0 lg:w-[25vw]">
        <p className="text-2xl">Tus datos:</p>
        <Input
          isRequired
          isClearable
          type="name"
          name="name"
          label="Nombre"
          placeholder="Tu nombre"
          onChange={handleInputChange}
          isInvalid={!formValidity && !isFieldValid(formData.name)}
          errorMessage="Campo obligatorio"
        />
        <Input
          isRequired
          isClearable
          type="lastname"
          name="lastname"
          label="Apellido"
          placeholder="Tu apellido"
          onChange={handleInputChange}
          isInvalid={!formValidity && !isFieldValid(formData.lastname)}
          errorMessage="Campo obligatorio"
        />
        <Input
          isRequired
          isClearable
          type="id"
          name="id"
          label="DNI"
          placeholder="Tu DNI"
          onChange={handleInputChange}
          isInvalid={!formValidity && !isFieldValid(formData.id)}
          errorMessage="Campo obligatorio"
        />
        <Input
          isRequired
          isClearable
          type="email"
          name="email"
          label="Email"
          placeholder="tuemail@email.com"
          onChange={handleInputChange}
          isInvalid={!formValidity && !isFieldValid(formData.email)}
          errorMessage="Campo obligatorio"
        />
        <Input
          isRequired
          isClearable
          type="phone"
          name="phone"
          label="Teléfono"
          placeholder="11 1234 1234"
          onChange={handleInputChange}
          isInvalid={!formValidity && !isFieldValid(formData.phone)}
          errorMessage="Campo obligatorio"
        />
        <Divider className="my-4" />
        <p className="text-2xl">
          Datos de envío:{" "}
          <small className="text-xs opacity-75">(Envío incluído)</small>
        </p>
        <div>
          <Input
            isRequired
            isClearable
            type="address"
            name="postal"
            label="Código postal"
            placeholder="..."
            onChange={handleInputChange}
            isInvalid={!formValidity && !isFieldValid(formData.postal)}
            errorMessage="Campo obligatorio"
          />
          <Link
            className="opacity-75 text-xs text-blue-600"
            href={"https://www.correoargentino.com.ar/formularios/cpa"}
            target="_blank"
          >
            No sé mi código
          </Link>
        </div>
        <Input
          isRequired
          isClearable
          type="address"
          name="local"
          label="Localidad"
          placeholder="..."
          onChange={handleInputChange}
          isInvalid={!formValidity && !isFieldValid(formData.local)}
          errorMessage="Campo obligatorio"
        />
        <Input
          isRequired
          isClearable
          type="address"
          name="street"
          label="Calle"
          placeholder="..."
          onChange={handleInputChange}
          isInvalid={!formValidity && !isFieldValid(formData.street)}
          errorMessage="Campo obligatorio"
        />
        <Input
          isRequired
          isClearable
          type="number"
          name="number"
          label="Número"
          placeholder="..."
          onChange={handleInputChange}
          isInvalid={!formValidity && !isFieldValid(formData.number)}
          errorMessage="Campo obligatorio"
        />
        <Input
          type="textarea"
          name="oth"
          label="Entre calles (Opcional)"
          placeholder="..."
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2 mx-2">
        <Button color="primary" onClick={handlePayment}>
          Pagar
        </Button>
        <MercadoPagoButton product={Product} />
        <Button color="danger" variant="bordered">
          Cancelar
        </Button>
      </div>
    </div>
  );
}
