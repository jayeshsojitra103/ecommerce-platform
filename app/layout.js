import "./globals.css";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

export const metadata = {
  title: "E-commerce Platform",
  description: "E-commerce Platform",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShoppingCartProvider>
        <Navbar />
        {children}
        </ShoppingCartProvider>
        </body>
    </html>
  );
}
