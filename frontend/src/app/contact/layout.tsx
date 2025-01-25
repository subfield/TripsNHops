import Header from "../_components/organisms/Header";
import Footer from "../_components/organisms/Footer";
export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <>{children}</>
        </main>
        <Footer />
      </body>
    </html>
  );
}
