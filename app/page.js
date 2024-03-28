'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import Categorysearch from "./_components/Categorysearch";
import DoctorList from "./_components/DoctorList";
import React, { useEffect, useState } from 'react'
import GlobalApi from "./_utils/GlobalApi";
import Footer from "./_components/Footer";
export default function Home() {
  const [doctorList,setDoctorList] = useState([]);
    useEffect(()=>{
        getDoctorList();
    },[])
    const getDoctorList=()=>(
       GlobalApi.getDoctorList().then((res)=>{
         const  response = res.data.data;
        console.log(res.data.data)
        setDoctorList(res.data.data);
        })
    )
  return (
   <div>
    <Hero/>
    <Categorysearch/>
    <DoctorList doctorList={doctorList}/>
   </div>
  );
}
