import CategoryFilters from "@/components/CategoryFilters";
import "../globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zephyr-Product",
  description: "Best place to shop clothing for your next occasion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation />
        <CategoryFilters>
          {children}
        </CategoryFilters>
      </body>
    </html>
  );
}
