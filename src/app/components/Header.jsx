import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="sticky top-0 z-30 p-3 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto ">
        {/*---logo ----*/}
        <Link href="/" className="hidden lg:inline-flex">
          <Image
            src="/instalogo.webp" // Corrected image path
            width={96}
            height={96}
            alt="instagram logo"
          />
        </Link>

        <Link href="/" className="lg:hidden ">
          <Image
            src="/instalg.webp" // Corrected image path
            width={40}
            height={40}
            alt="instagram logo"
          />
        </Link>

        {/*--- Search input ----*/}

        <input
          type="text"
          placeholder="Search"
          className=" bg-gray-50 border-gray-200 rounded text-sm w-full py-2 px-2 max-w-[210px]"
        />

        {/*---menu items  ----*/}

        <button className="text-sm font-semibold text-blue-500">Login</button>
      </div>
    </div>
  );
}
