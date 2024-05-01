import Link from "next/link";
import { CategoryCard } from "../../components";
import data from "../../data/data.json";
import { ProductType } from "@/app/types";

export default function AllProducts() {
  const uniqueCategories: { [key: string]: ProductType } = {};

  data.forEach((product: ProductType) => {
    if (!uniqueCategories[product.category]) {
      uniqueCategories[product.category] = product;
    }
  });

  const uniqueCategoryArray = Object.values(uniqueCategories);

  return (
    <div className="flex flex-wrap justify-center gap-8 p-12">
      {uniqueCategoryArray.map(
        (productCategory: ProductType, index: number) => (
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
        )
      )}
    </div>
  );
}
