import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";

export const metadata = {
  title: "google clone",
  description: "google clone website",
};

export default function SearchLayout({ children }) {
  return (
    <div className={inter.className}>
      <SearchHeader />
      {children}
    </div>
  );
}
