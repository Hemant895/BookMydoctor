'use client'
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'
function Categorysearch() {
  const [categoryList,setCategoryList] = useState([]);
    useEffect(()=>{
        getCategoryList();
    },[])
    const getCategoryList=()=>(
        GlobalApi.getCategory().then((res)=>{
         const  response = res.data.data
        // console.log(response)
        setCategoryList(res.data.data);
        })
    )
  return (
    <div className='mb-10 items-center flex flex-col gap-2'>
        <h2 className='text-4xl font-bold tracking-wide'>
            Search <span className='text-indigo-900'> Doctors </span> 
        </h2>
        <h2 className='text-gray-500 text-xl px-5 text-center'>Search Your Doctor and Book Appoinment </h2>
        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search...." />
      
      <Button type="submit"><Search className='h-4 w-4 mr-2'/>Search</Button>
    </div>
    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
    {  
      categoryList.length>0?categoryList.map((item,index)=>(index<6 &&
        <Link href={'/search/'+item.attributes.Name} key={item.id} className='flex flex-col text-center items-center  gap-2 mt-5 p-5  m-2 rounded-lg bg-primary text-white hover:scale-105 transition-all ease-in-out'> 
           <Image
          alt=""
          src={item.attributes.Icon.data.attributes.url}
          width={40}
          height={40}
        
        />
        <label className='font-bold'>
          {item.attributes?.Name}
        </label>
        </Link>
      ))
      :
      [1,2,3,4,5,6].map((item,index)=>(
        <div className=" h-[130px] w-[130px] m-2 bg-slate-200 rounded-lg animate-pulse ">
        </div>

    ))
    }
    </div>
    
    </div>
  )
}

export default Categorysearch