import { PageHeader } from "../components";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PageHeader />
      {children}
    </div>
  );
}
