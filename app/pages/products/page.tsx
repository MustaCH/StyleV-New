import Link from "next/link";
import { CategoryCard } from "../../components";
import data from "../../data/data.json";

export default function AllProducts() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-12">
      {data.categorias.map((categoria, index) => (
        <Link
          href={{
            pathname: "category",
            query: { _id: categoria?.nombre },
          }}
        >
          <CategoryCard
            key={index}
            name={categoria.nombre}
            sub={categoria.subtitulo}
            pic={categoria.productos[0]?.pics[0]}
          />
        </Link>
      ))}
    </div>
  );
}
