import "./globals.css";
import localFont from "next/font/local";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/shared/header/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import CustomProvider from "@/redux/CustomProvider";
import { AuthProvider } from "@/context/AuthContext";
import QueryProvider from "@/components/QueryProvider";

export const metadata = {
  title: "فروشگاه چای و برنج گیلانه",
  description: "فروشگاه چای و برنج گیلانه با محصولات درجه یک",
};

const iransans = localFont({
  src: [
    {
      path: "../public/fonts/Iransans/IRANSans.ttf",
      weight: "500",
      style: "normal",
    },
  ],

  variable: "--font-iransans",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${iransans.variable}`}>
      <QueryProvider>
        <AuthProvider>
          <CustomProvider>
            <Navbar />
            {children}
            <Footer />
          </CustomProvider>
        </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
