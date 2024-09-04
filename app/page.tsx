"use client";

import { useEffect, useState } from "react";
import { Header } from "./components";
import { ProductType } from "@/app/types";
import ProductCard from "./components/card";
import { Button, Spinner } from "@nextui-org/react";
import Link from "next/link";

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
      <div className="flex flex-wrap justify-center gap-6 p-10 relative z-10">
        {products.map((product) => (
          <ProductCard key={product._id} data={product} />
        ))}
        <div className="flex justify-center bg-black py-4 w-full">
            <Button as={Link} href="pages/products" color="primary" className="bg-transparent border-2 border-sky-700 hover:bg-sky-700 hover:drop-shadow-[0_15px_20px_rgba(29,78,216,0.25)] duration-300 text-sky-700 hover:text-white">Ver todo</Button>
        </div>
      </div>
    </main>
  );
}
