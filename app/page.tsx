"use client";

import { useEffect, useState } from "react";
import { Header } from "./components";
import { ProductType } from "@/app/types";
import ProductCard from "./components/card";
import { Spinner } from "@nextui-org/react";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 h-screen">
        <p>Cargando tu nuevo estilo</p>
        <Spinner />
      </div>
    );
  }

  return (
    <main className="">
      <Header />
      <div className="flex justify-center text-center pt-12 text-2xl font-semibold">
        <h2>TODO LO NUEVO.</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-10">
        {products.map((product) => (
          <ProductCard key={product._id} data={product} />
        ))}
      </div>
    </main>
  );
}
