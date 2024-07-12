"use client";

import React, { useState } from "react";
import { Button, Divider, Input } from "@nextui-org/react";
import { useCartContext } from "@/app/providers";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckoutItem, MpButton } from "@/app/components";

type FormData = {
  name: string;
  lastname: string;
  id: string;
  email: string;
  phone: string;
  postal: string;
  local: string;
  street: string;
  number: string;
  oth: string;
};

export default function Checkout() {
  const routes = useRouter();
  const { cart } = useCartContext();
  const [formData, setFormData] = useState<FormData>({
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

  const [touched, setTouched] = useState({
    name: false,
    lastname: false,
    id: false,
    email: false,
    phone: false,
    postal: false,
    local: false,
    street: false,
    number: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const isFieldValid = (value: string) => {
    return value.trim() !== "";
  };

  const handleFormSubmit = () => {
    setFormSubmitted(true);

    const isValid = Object.keys(formData).every((key) => {
      if (key in touched) {
        return isFieldValid(formData[key as keyof FormData]);
      }
      return true;
    });

    if (!isValid) {
      return; // prevent submission if the form is invalid
    }

    createOrder({ userData: formData, cart });
    routes.push("/success"); // Redirect to a success page or show success message
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
          type="text"
          name="name"
          label="Nombre"
          placeholder="Tu nombre"
          onChange={handleInputChange}
          isInvalid={
            (formSubmitted || touched.name) && !isFieldValid(formData.name)
          }
          errorMessage="Campo obligatorio"
        />
        <Input
          isRequired
          isClearable
          type="text"
          name="lastname"
          label="Apellido"
          placeholder="Tu apellido"
          onChange={handleInputChange}
          isInvalid={
            (formSubmitted || touched.lastname) &&
            !isFieldValid(formData.lastname)
          }
          errorMessage="Campo obligatorio"
        />
        <Input
          isRequired
          isClearable
          type="text"
          name="id"
          label="DNI"
          placeholder="Tu DNI"
          onChange={handleInputChange}
          isInvalid={
            (formSubmitted || touched.id) && !isFieldValid(formData.id)
          }
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
          isInvalid={
            (formSubmitted || touched.email) && !isFieldValid(formData.email)
          }
          errorMessage="Campo obligatorio"
        />
        <Input
          isRequired
          isClearable
          type="text"
          name="phone"
          label="Teléfono"
          placeholder="11 1234 1234"
          onChange={handleInputChange}
          isInvalid={
            (formSubmitted || touched.phone) && !isFieldValid(formData.phone)
          }
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
            type="text"
            name="postal"
            label="Código postal"
            placeholder="..."
            onChange={handleInputChange}
            isInvalid={
              (formSubmitted || touched.postal) &&
              !isFieldValid(formData.postal)
            }
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
          type="text"
          name="local"
          label="Localidad"
          placeholder="..."
          onChange={handleInputChange}
          isInvalid={
            (formSubmitted || touched.local) && !isFieldValid(formData.local)
          }
          errorMessage="Campo obligatorio"
        />
        <Input
          isRequired
          isClearable
          type="text"
          name="street"
          label="Calle"
          placeholder="..."
          onChange={handleInputChange}
          isInvalid={
            (formSubmitted || touched.street) && !isFieldValid(formData.street)
          }
          errorMessage="Campo obligatorio"
        />
        <Input
          isRequired
          isClearable
          type="text"
          name="number"
          label="Número"
          placeholder="..."
          onChange={handleInputChange}
          isInvalid={
            (formSubmitted || touched.number) && !isFieldValid(formData.number)
          }
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
