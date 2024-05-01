import { Header } from "./components";

export default function Home() {
  const categories = [
    {
      id: 1,
      name: "tops",
      pic: "https://i.ibb.co/H4vWTkx/image.png",
    },
    {
      id: 2,
      name: "bottoms",
      pic: "https://i.ibb.co/H4vWTkx/image.png",
    },
    {
      id: 3,
      name: "sets",
      pic: "https://i.ibb.co/H4vWTkx/image.png",
    },
    {
      id: 4,
      name: "accesorios",
      pic: "https://i.ibb.co/H4vWTkx/image.png",
    },
  ];

  return (
    <main className="">
      <Header />
      <div className="flex flex-wrap justify-center gap-6 p-10"></div>
    </main>
  );
}
