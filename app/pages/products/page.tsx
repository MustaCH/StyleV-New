"use client";

import Link from "next/link";
import { CategoryCard } from "../../components";
import { ProductType } from "@/app/types";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [uniqueCategories, setUniqueCategories] = useState<{
    [key: string]: ProductType;
  }>({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/products");
      if (!response.ok) {
        console.error("Failed to fetch products", response.status);
        return;
      }
      const data: ProductType[] = await response.json();

      const uniqueCategories: { [key: string]: ProductType } = {};

      data.forEach((product) => {
        if (!uniqueCategories[product.category]) {
          uniqueCategories[product.category] = product;
        }
      });

      setUniqueCategories(uniqueCategories);
    }

    fetchData();
  }, []);

  const uniqueCategoryArray = Object.values(uniqueCategories);

  return (
    <div className="flex flex-wrap justify-center gap-8 p-12">
      {uniqueCategoryArray.map((productCategory, index) => (
        <Link
          href={{
            pathname: "category",
            query: { _id: productCategory.category },
          }}
          key={index}
        >
          <CategoryCard
            name={productCategory.category}
            sub={productCategory.category}
            pic={productCategory.pics[0]}
          />
        </Link>
      ))}
    </div>
  );
}
