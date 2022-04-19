import React from "react";

import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
function Header({ isActive, setIsActive, handleClick }) {
  return (
    <header>
      <nav className="p-6 lg:p-4 flex items-center justify-between">
        <logo>
          <Link href="/">
            <a className="text-3xl font-bold logo text-red-500">EssayDesk</a>
          </Link>
        </logo>
        <div className="hidden lg:flex items-center space-x-12 text-[15px] font-[500]">
          <Link href="/">
            <a className="hover:text-red-500">Home</a>
          </Link>
          <Link href="/">
            <a className=" hover:text-red-500">Documents</a>
          </Link>
          <Link href="/">
            <a className="hover:text-red-500">Join Our Tutors</a>
          </Link>
          <Link href="/">
            <a className=" hover:text-red-500">Login</a>
          </Link>
          <Link href="/">
            <a className="bg-blue-400 px-5 py-3 rounded-full">Register</a>
          </Link>
        </div>
        {isActive ? (
          <XIcon className="h-6 text-red-500" onClick={handleClick} />
        ) : (
          <MenuIcon className="h-6 " onClick={handleClick} />
        )}
      </nav>
    </header>
  );
}

export default Header;
