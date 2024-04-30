import { Card } from "@/app/components";
import data from "../../data/data.json";
import { ProductType } from "@/app/types";

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Category({ searchParams }: Props) {
  const getCategoryByName = (categoryName: any) => {
    const categoria = data.categorias.find(
      (categoria: any) => categoria.nombre === categoryName
    );
    return categoria;
  };

  const cat = getCategoryByName(searchParams?._id);
  console.log(searchParams?._id);
  return (
    <div>
      <div className="flex justify-center">
        {cat ? (
          <p className="text-3xl uppercase font-bold">{cat.nombre}.</p>
        ) : (
          <p className="text-3xl">Categoría no encontrada</p>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-12">
        {cat?.productos.map((product: ProductType) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
