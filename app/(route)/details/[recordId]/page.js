"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useState } from "react";
import { useEffect } from "react";
import Doctordetails from "../_components/Doctordetails";

function Details({ params }) {
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    getDoctorById();
    console.log(params.recordId);
  });
  const getDoctorById = () => {
    GlobalApi.getDoctorById(params.recordId).then((res) => {
      console.log(res);
      setDoctor(res.data.data);
    });
  };
  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold text-[22px]"></h2>
      <div className="grid gird-cols-1 md:gird-cols-4 ">
        <div className="col-span-3 ">
         {doctor && <Doctordetails doctor={doctor}/>} 
        </div>
      </div>
    </div>
  );
}

export default Details;
