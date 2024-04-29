import { Card } from "@/app/components";

export default function Category() {
  const products = [
    {
      name: "Saco 3 piezas",
      price: 85000,
      pics: [
        "https://i.ibb.co/H4vWTkx/image.png",
        "https://i.ibb.co/H4vWTkx/image.png",
        "https://i.ibb.co/H4vWTkx/image.png",
      ],
    },
    {
      name: "Pantalon de tu vieja",
      price: 90000,
      pics: [
        "https://i.ibb.co/H4vWTkx/image.png",
        "https://i.ibb.co/H4vWTkx/image.png",
        "https://i.ibb.co/H4vWTkx/image.png",
      ],
    },
    {
      name: "Medias de tu tio",
      price: 70000,
      pics: [
        "https://i.ibb.co/H4vWTkx/image.png",
        "https://i.ibb.co/H4vWTkx/image.png",
        "https://i.ibb.co/H4vWTkx/image.png",
      ],
    },
    {
      name: "Alfajor de maicena",
      price: 25000,
      pics: [
        "https://i.ibb.co/H4vWTkx/image.png",
        "https://i.ibb.co/H4vWTkx/image.png",
        "https://i.ibb.co/H4vWTkx/image.png",
      ],
    },
  ];

  return (
    <div>
      <div className="flex justify-center">
        <p className="text-3xl">Category</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-12">
        {products.map((product, index) => (
          <Card
            key={index}
            name={product.name}
            price={product.price}
            pic={product.pics[0]}
          />
        ))}
      </div>
    </div>
  );
}
