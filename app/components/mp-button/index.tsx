"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductType } from "@/app/types";
import { Button } from "@nextui-org/react";

interface MercadoPagoButtonProps {
  cart: ProductType[];
  isFormCompleted: boolean;
}

const MercadoPagoButton = ({
  cart,
  isFormCompleted,
}: MercadoPagoButtonProps) => {
  const [url, setUrl] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true);

      try {
        const { data: preference } = await axios.post("/api/checkout", {
          cart,
        });

        setUrl(preference.url);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    generateLink();
  }, [cart]);

  return (
    <div>
      {loading ? (
        <Button isLoading disabled={true} className="w-full">
          Comprar ahora
        </Button>
      ) : (
        <Button
          color="primary"
          isDisabled={!isFormCompleted}
          className="w-full"
        >
          <a href={url}>Comprar ahora</a>
        </Button>
      )}
    </div>
  );
};

export default MercadoPagoButton;
