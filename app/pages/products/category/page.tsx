import { Card } from "@/app/components";

export default function Category() {
  return (
    <div>
      <div className="flex justify-center">
        <p className="text-3xl">Category</p>
      </div>
      <div className="flex flex-wrap justify-center py-12">
        <Card />
      </div>
    </div>
  );
}
