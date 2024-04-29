"use client";

import { Product } from "@/app/components";
import { useCartContext } from "@/app/providers";

const ProductPage: React.FC = () => {
  const { addToCart } = useCartContext();

  const product = {
    id: 1,
    quantity: 1,
    name: "Saco 3 piezas",
    price: 85000,
    pics: [
      "https://i.ibb.co/H4vWTkx/image.png",
      "https://i.ibb.co/H4vWTkx/image.png",
      "https://i.ibb.co/H4vWTkx/image.png",
    ],
    medidas: ["60cm", "40cm", "30cm", "70cm"],
    color: "gris",
  };

  return (
    <div className="flex justify-center py-12">
      <Product
        name={product.name}
        price={product.price}
        pics={product.pics}
        color={product.color}
        measures={product.medidas}
        addToCart={() => addToCart(product)}
      />
    </div>
  );
};

export default ProductPage;
