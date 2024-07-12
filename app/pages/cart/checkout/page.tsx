"use client";

import React, { useState } from "react";
import { Button, Divider, Input } from "@nextui-org/react";
import { useCartContext } from "@/app/providers";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckoutItem, MpButton } from "@/app/components";
import { Product } from "@/app/mock/Producto";

export default function Checkout() {
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
    const isValid = validateForm();
    if (isValid) {
      const userData = { ...formData };
      const data = {
        userData,
        cart,
      };
      createOrder(data);
      routes.push("/pages/payments/confirmation");
    } else {
      alert("Todos los campos obligatorios deben ser completados.");
    }
  };

  const validateForm = () => {
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

    localStorage.setItem("order", JSON.stringify(order));
  }

  return (
    <div className="lg:grid place-content-center my-10">
      <h2 className="text-center text-3xl uppercase font-semibold">Checkout</h2>
      <Divider className="my-4" />
      <div>
        {cart.map((item, id) => (
          <CheckoutItem key={id} product={item} />
        ))}
      </div>
      <Divider className="my-4" />
      <div className="flex justify-between items-center mx-6 my-4">
        <p className="text-xl font-bold">Total:</p>
        <p className="text-lg dark:text-white/80">
          ${cart.reduce((total, item) => total + item.price, 0)}
        </p>
      </div>
      <Divider className="my-4" />
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
        <MpButton isFormCompleted={true} cart={cart} />
        <Button color="danger" variant="bordered">
          Cancelar
        </Button>
      </div>
    </div>
  );
}
