import Header from "./_components/organisms/Header";
import Footer from "./_components/organisms/Footer";

export default function template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}