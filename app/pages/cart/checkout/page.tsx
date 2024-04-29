import React from "react";
import { Button, Divider, Input, Link } from "@nextui-org/react";

export default function Checkout() {
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
          label="Nombre"
          placeholder="Tu nombre"
        />
        <Input
          isRequired
          isClearable
          type="lastname"
          label="Apellido"
          placeholder="Tu apellido"
        />
        <Input
          isRequired
          isClearable
          type="email"
          label="Email"
          placeholder="tuemail@email.com"
        />
        <Input
          isRequired
          isClearable
          type="phone"
          label="Teléfono"
          placeholder="11 1234 1234"
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
            label="Código postal"
            placeholder="..."
          />
          <Link className="opacity-75" size="sm" href={""} isExternal>
            No sé mi código
          </Link>
        </div>
        <Input
          isRequired
          isClearable
          type="address"
          label="Localidad"
          placeholder="..."
        />
        <Input
          isRequired
          isClearable
          type="address"
          label="Calle"
          placeholder="..."
        />
        <Input
          isRequired
          isClearable
          type="number"
          label="Número"
          placeholder="..."
        />
        <Input
          type="textarea"
          label="Entre calles (Opcional)"
          placeholder="..."
        />
      </div>
      <div className="flex flex-col gap-2 mx-2">
        <Button color="primary">Pagar</Button>
        <Button color="danger" variant="bordered">
          Cancelar
        </Button>
      </div>
    </div>
  );
}
