import { NavBar } from "../components/NavBar";
import SideBar from "./components/SideBar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        <div className="flex w-full items-stretch ">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
