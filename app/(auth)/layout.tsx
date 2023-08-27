import Image from "next/image";
import Link from "next/link";
import { BiMoneyWithdraw } from "react-icons/bi";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex bg-dark-800 items-center justify-between">
          <div className="flex flex-col px-10">
            <Link href={"/"}>
              <div className="flex items-center gap-1 text-text-100">
                <BiMoneyWithdraw className="text-xl" color="white" />
                <h2 className="font-r text-sm ">FinanSmart</h2>
              </div>
            </Link>
            <Image
              width={400}
              height={400}
              className="w-[90%] rotate-90 object-contain"
              src={"/assets/header-image.png"}
              alt="Header Image"
            />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
