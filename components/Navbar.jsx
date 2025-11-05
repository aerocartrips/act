"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  const nav2 = [
    { href: "/delta", label: "Delta Air line" },
    { href: "/united", label: "United Airline" },
    { href: "/jetblue", label: "JetBlue Airline" },
    { href: "/spirit", label: "Spirit Airline" },
   
  ];

  return (
    <>
      <nav className="  bg-linear-65 bg-white to-gray-100 text-white px-4 py-2 border border-b-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center ">
          {/*  */}
         <div className="flex items-center gap-2">
          <Image src="/logo/logo.png" alt="aerocartrips" width={100} height={100} className="w-10 h-10 rounded-sm"/>

           <Link
            href="/"
            className=" text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500"
          >

            Aerocartrips
          </Link>
         </div>
          <ul className="space-x-8 text-white hidden md:flex">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover:text-fuchsia-600  ${
                    pathname === href
                      ? "text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500"
                      : "text-[#01426a]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* <nav className="  bg-linear-65 bg-white to-gray-100 text-white px-4 py-1 shadow-xs sticky top-[53px] z-40">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-center items-center ">
        
          <ul className="space-x-8 text-white hidden md:flex">
            {nav2.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover:text-fuchsia-600  ${
                    pathname === href
                      ? "text-transparent bg-clip-text bg-gradient-to-bl from-violet-500 to-fuchsia-500"
                      : "text-[#01426a]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
