"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function Header() {
  const { data: session } = useSession();
  console.log(session);

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

        {session ? (
          <div className="flex items-center gap-2">
            <IoMdAddCircleOutline
              className="text-2xl transition duration-300 cursor-pointer tranform hover:scale-125 hover:text-red-600"
              onClick={() => setIsOpen(true)}
            />
            <img
              src={session.user.image}
              alt={session.user.name}
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={signOut}
            />
          </div>
        ) : (
          <button
            onClick={signIn}
            className="text-sm font-semibold text-blue-500"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
}
