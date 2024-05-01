"use client";

import { Product } from "@/app/components";
import data from "../../data/data.json";
import { Spinner } from "@nextui-org/react";

type Props = {
  searchParams: {
    _id: string;
  };
};

const ProductPage = ({ searchParams }: Props) => {
  const idString = searchParams._id;
  const id = parseInt(idString);
  const getProductById = (productId: number) => {
    return data.find((prod) => prod.id === productId);
  };

  const product = getProductById(id || 0);

  return (
    <div className="flex justify-center py-12">
      {product ? (
        <Product
          id={product.id}
          name={product.name}
          price={product.price}
          pics={product.pics}
          color={product.color}
          measures={product.measures}
          quantity={product.quantity}
          category={product.category}
        />
      ) : (
        <Spinner size="lg" />
      )}
    </div>
  );
};

export default ProductPage;
