"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import GlobalApi from "@/app/_utils/GlobalApi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";


function CategoryList() {
    const params = usePathname();
    const category = params.split('/')[2]
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () =>
    GlobalApi.getCategory().then((res) => {
      const response = res.data.data;
      console.log(params)
      setCategoryList(res.data.data);
    });
  return (
    <div className="h-screen mt-5 flex flex-col ">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible ">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions" >
            {categoryList&&categoryList.map((item, index) => (
                <CommandItem key={item.id}>
                  <Link href={'/search/'+item.attributes.Name}
                  className={` p-2 flex gap-2 rounded-md  text-bold items-center cursor-pointer w-full text-[15px] ${category==item.attributes.Name&&'bg-blue-100'}`}>
                    <Image
                      alt=""
                      src={item.attributes.Icon.data.attributes.url}
                      width={25}
                      height={25}
                    />
                    <label>{item.attributes.Name}</label>
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
