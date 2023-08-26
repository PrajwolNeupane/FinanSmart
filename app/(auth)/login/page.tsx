import Image from "next/image";
import Link from "next/link";
import { BiMoneyWithdraw } from "react-icons/bi";

export default function Page() {
  return (
    <div className="flex  h-[100vh] bg-dark-800 items-center justify-between">
      <div className="flex flex-col flex-5 py-[5%] ">
        <div className="flex items-center gap-1 text-text-100">
          <BiMoneyWithdraw className="text-xl" color="white" />
          <h2 className="font-r text-sm ">FinanSmart</h2>
        </div>
        <Image
          width={400}
          height={400}
          className="w-[90%] rotate-90 object-cover"
          src={"/assets/header-image.png"}
          alt="Header Image"
        />
      </div>
      <div className="flex-1 bg-dark-700 min-h-full gap-5 flex flex-col items-start">
        <h1 className="text-2xl font-sb yellow-gradient-text tracking-[-2px]">
          Empowering Your Financial Journey.
        </h1>
        <p className="text-text-500 font-l text-3xs leading-[150%]">
          Discover financial freedom with our free budget management system.
          Navigate your financial journey with ease, empowered by our digital
          tools.
        </p>
        <Link
          href={"/"}
          className="bg-green-600 hover:bg-green-700 text-text-100 font-r button-solid"
        >
          Start Now
        </Link>
      </div>
    </div>
  );
}
