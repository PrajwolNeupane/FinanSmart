"use client";
import { BiMoneyWithdraw, BiMenu } from "react-icons/bi";
import { useState, useEffect } from "react";
import Link from "next/link";

export const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openDrawer]);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row max-rg:hidden  md:gap-0 gap-3  px-[5%] h-[100px]  items-center justify-between sticky top-0 bg-dark-800">
        <Link href={"/"}>
          <div className="flex items-center gap-1 text-text-100">
            <BiMoneyWithdraw className="text-xl" color="white" />
            <h2 className="font-r text-sm ">FinanSmart</h2>
          </div>
        </Link>
        <div className="flex items-center gap-[40px]">
          <Link href={'/'}>
            <h2 className="text-3xs font-r text-text-200">Home</h2>
          </Link>
          <h2 className="text-3xs font-r text-text-300">Finan Smart</h2>
          <h2 className="text-3xs font-r text-text-300">Finan Smart</h2>
          <Link href={"/login"}>
            <button className=" text-4xs font-r text-text-200 rounded-md  border-text-200">
              Log In
            </button>
          </Link>
          <Link href={"/signup"}>
            <button className="button-solid text-4xs font-sb bg-text-200 hover:bg-text-100 text-dark-800 ">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full hidden max-rg:flex  px-[5%]  py-8 bg-dark-600 justify-between">
        <BiMenu
          className="text-[40px]"
          color="white"
          onClick={() => {
            setOpenDrawer(!openDrawer);
          }}
        />
        <div className="flex items-center gap-1 text-text-100">
          <BiMoneyWithdraw className="text-lg" color="white" />
          <h2 className="font-r text-xs ">FinanSmart</h2>
        </div>
        <button className="text-4xs font-r text-text-200 rounded-md  border-text-200">
          Log In
        </button>
      </div>
      {openDrawer ? (
        <div
          id="drawer-modal-overlay"
          className="modal-overlay"
          onClick={(e: any) => {
            if (e.target.id == "drawer-modal-overlay") {
              setOpenDrawer(!openDrawer);
            }
          }}
        >
          <div className="absolute z-[6] left-0 top-0 w-[50%] px-10 py-[15%] h-[100vh] bg-white">
            <h2 className="text-xs font-r text-dark-800">Home</h2>
            <h2 className="text-xs font-r text-dark-800">Finan Smart</h2>
            <h2 className="text-xs font-r text-dark-800">Finan Smart</h2>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
