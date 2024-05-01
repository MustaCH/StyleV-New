import { Card } from "@/app/components";
import data from "../../data/data.json";
import { ProductType } from "@/app/types";
import Link from "next/link";
import { Spinner } from "@nextui-org/react";

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Category({ searchParams }: Props) {
  const getCategoryById = (categoryId: string) => {
    return data.filter((cat) => cat.category === categoryId);
  };

  const cat = getCategoryById(
    Array.isArray(searchParams?._id)
      ? searchParams._id[0]
      : searchParams._id || ""
  );
  const categoryName = searchParams._id;

  return (
    <div>
      <div className="flex justify-center">
        {cat ? (
          <p className="text-3xl uppercase font-bold">{categoryName}</p>
        ) : (
          <Spinner size="lg" />
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-12">
        {cat?.map((product: ProductType) => (
          <Link
            href={{
              pathname: "product",
              query: { _id: product.id },
            }}
            key={product.id}
          >
            <Card data={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
