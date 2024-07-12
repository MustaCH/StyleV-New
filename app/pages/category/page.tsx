"use client";

import { Card } from "@/app/components";
import { ProductType } from "@/app/types";
import Link from "next/link";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Category({ searchParams }: Props) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const categoryId = Array.isArray(searchParams?._id)
        ? searchParams._id[0]
        : searchParams._id || "";

      console.log("Category ID:", categoryId);

      const response = await fetch(`/api/products?category=${categoryId}`);
      if (!response.ok) {
        console.error("Failed to fetch products", response.status);
        return;
      }
      const data: ProductType[] = await response.json();

      setProducts(data);
      setLoading(false);
    }

    fetchData();
  }, [searchParams]);

  const categoryName = searchParams._id;

  return (
    <div>
      <div className="flex justify-center">
        {loading ? (
          <Spinner size="lg" />
        ) : (
          <p className="text-3xl uppercase font-bold">{categoryName}</p>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-12">
        {products.map((product) => (
          <Link
            href={{
              pathname: "/product",
              query: { _id: product._id.toString() },
            }}
            key={product._id}
          >
            <Card data={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
