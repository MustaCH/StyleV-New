"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ProductType } from "./types";

type CartContextType = {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  clearCart: () => void;
  deleteProduct: (productId: number) => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  clearCart: () => {},
  deleteProduct: () => {},
});

export const useCartContext = () => useContext(CartContext);

const CartProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: ProductType) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
      console.log(cart);
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProduct = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const Providers: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <CartProvider>
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        themes={["light", "dark"]}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  </CartProvider>
);
