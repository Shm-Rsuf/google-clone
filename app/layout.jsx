import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "google clone",
  description: "google clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
