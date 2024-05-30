"use client"
import { navLinks } from "@/lib/data";
import clsx from "clsx";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [state, setState] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="bg-white dark:bg-slate-900 w-full border-b border-slate-200 dark:border-slate-600">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/logo.png" className="hidden dark:block" alt="logo" width={56} height={56} />
            <Image src="/logo-noir.png" className="block dark:hidden" alt="logo" width={56} height={60} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{''}</span>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              title="open menu"
              onClick={() => setState(!state)}
            >
              <div className="flex flex-col space-y-1 p-2 rounded-md border border-slate-900 dark:border-slate-400">
               <div className="h-1 w-6 bg-slate-900 dark:bg-white rounded-xl" />
               <div className="h-1 w-6 bg-slate-900 dark:bg-white rounded-xl" />
               <div className="h-1 w-6 bg-slate-900 dark:bg-white rounded-xl" />
             </div>
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navLinks.map((item) => (
              <Link key={item.label}href={item.href} className={clsx ('block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700',
                {'bg-slate-100 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-slate-700 dark:text-white md:dark:bg-transparent': pathname === item.href}
              )}>
                <p>{item.label}</p>
              </Link>
            ))}
            <div className="md:hidden">
            <Link href='/contact' className=" btn-blue dark:hover:shadow-bleu"> Contactez-Nous</Link>
        </div>
          </ul>
        </div>
        <div className="hidden md:block">
            <Link href='/contact' className="btn-blue dark:hover:shadow-bleu"> Contactez-Nous</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
