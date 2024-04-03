"use client"
import { Button } from "@/components/ui/button";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import React, { useEffect } from "react";
import Link from "next/link";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/search/Cardiologist",
    },
    {
      id: 3,
      name: "Contact us",
      path: "/contact",
    },
  ];
  const {user} = useKindeBrowserClient();
  useEffect(()=>{
   console.log(user)
  },[user])
  return (
    <div className=" flex justify-between p-4 shadow-md rounded-full ">
      <div className="flex items-center  gap-20">
        <Image src={'/bookmydoctor.png'} width={200} height={200} alt="logo"/>
        <ul className="md:flex gap-20  hidden font-bold">
          {Menu.map((item, index) => (
           <Link href={item.path}  key={index}>
            <li className="hover:text-indigo-900 cursor-pointer hover:scale-105 transition-all ease-in-out">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center  space-x-5">
        <div className="justify-end flex">
          {
             user?
             <Popover>
             <PopoverTrigger><Image  className='rounded-full' src={user?.picture} width={50} height={50} alt="picture"/></PopoverTrigger>
             <PopoverContent  className="w-44">
              <ul className=" felx flex-col gap-2 cursor-pointer"> 
              
                <Link href={'/my-booking'} className="bg-slat-100 p-2 hover:bg-primary rounded-lg hover:text-white" >
                  My Bookings
                </Link>
                <li className="bg-slat-100 p-2 hover:bg-primary rounded-lg hover:text-white">
                <LogoutLink>Log out</LogoutLink>
                </li>
              </ul>
             </PopoverContent>
           </Popover>
            : <LoginLink><Button>Get started</Button></LoginLink>
          }
        
        </div>
      </div>
    </div>
  );
}

export default Header;
