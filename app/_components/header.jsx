import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/home",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact us",
      path: "/contact",
    },
  ];
  return (
    <div className=" flex justify-between p-4 shadow-md ">
      <div className="flex items-center  gap-20">
        <h1>
          <span className=" font-bold text-3xl text-violet-650">Book</span>
          <span className=" text-sky-900 font-bold text-3xl">MyDoctor</span>
        </h1>
        <ul className="md:flex gap-20  hidden font-bold">
          {Menu.map((item, index) => (
           <Link href={item.path}>
            <li className="hover:text-indigo-900 cursor-pointer hover:scale-105 transition-all ease-in-out">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center  space-x-5">
        <div className="justify-end flex">
          <Button>Get started</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
