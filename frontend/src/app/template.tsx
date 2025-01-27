import Header from "@/app/_components/organisms/Header";
import Footer from "@/app/_components/organisms/Footer";

export default function template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <Header />
    {children}
    <Footer />
  </>;
}
