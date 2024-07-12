"use client";

import { Product } from "@/app/components";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

type Props = {
  searchParams: {
    _id: string;
  };
};

const ProductPage = ({ searchParams }: Props) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const id = searchParams._id;
      if (!id) {
        console.error("Product ID is required");
        return;
      }
      const response = await fetch(`/api/products/${id}`);
      if (!response.ok) {
        console.error("Failed to fetch product", response.status);
        return;
      }
      const data = await response.json();

      setProduct(data);
      setLoading(false);
    }

    fetchData();
  }, [searchParams]);

  return (
    <div className="flex justify-center py-12">
      {loading ? (
        <Spinner size="lg" />
      ) : (
        product && (
          <Product
            _id={product._id}
            name={product.name}
            price={product.price}
            pics={product.pics}
            color={product.color}
            measures={product.measures}
            quantity={product.quantity}
            category={product.category}
          />
        )
      )}
    </div>
  );
};

export default ProductPage;
