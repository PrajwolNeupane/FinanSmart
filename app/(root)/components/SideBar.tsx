"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import Link from "next/link";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-[22%] items-center gap-8 bg-dark-800 py-10 fixed min-h-[100vh]">
      <div className="flex flex-col items-center">
        <Image
          src={"/assets/DEV_PHOTO.jpg"}
          className="aspect-square object-cover rounded-[100%]"
          alt="Profile Photo"
          width={100}
          height={100}
        />
        <h2 className="text-text-200 font-mb text-xs">Prajwol Neupane</h2>
        <h4 className="text-text-500 font-l text-4xs">
          prajwolneupane68@gmail.com
        </h4>
      </div>
      <Link
        href={"/dashboard"}
        className="flex items-center gap-5 w-full text-text-400 h-[50px]"
      >
        <div
          className={`${
            pathname.includes("/dashboard") ? "bg-brand-700" : "bg-transparent"
          } w-[3px] h-full`}
        ></div>
        <AiOutlineDashboard className="text-m" />
        <h3 className="font-r text-3xs">Dashboard</h3>
      </Link>
      <Link
        href={"/manage"}
        className="flex items-center gap-5 w-full text-text-400 h-[50px]"
      >
        <div
          className={`${
            pathname.includes("/manage") ? "bg-brand-700" : "bg-transparent"
          } w-[3px] h-full`}
        ></div>
        <BiNotepad className="text-m" />
        <h3 className="font-r text-3xs">Manage</h3>
      </Link>
      <div className="flex items-center gap-5 w-full text-text-400 h-[50px]">
        <div
          className={`${
            pathname.includes("/ok") ? "bg-brand-700" : "bg-transparent"
          } w-[3px] h-full`}
        ></div>
        <AiOutlineDashboard className="text-m" />
        <h3 className="font-r text-3xs">Dashboard</h3>
      </div>
      <div className="flex items-center gap-5 w-full text-text-400 h-[50px]">
        <div
          className={`${
            pathname.includes("/kl") ? "bg-brand-700" : "bg-transparent"
          } w-[3px] h-full`}
        ></div>
        <AiOutlineDashboard className="text-m" />
        <h3 className="font-r text-3xs">Dashboard</h3>
      </div>
    </div>
  );
}
