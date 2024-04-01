import Image from "next/image";
import React from "react";
import BookAppoinment from "./BookAppoinment";

function Doctordetails({doctor}) {
  
  const socialMediaList = [
    {
      id:1,
      icon:"/youtube.png",
      url:''

    },
    {
      id:2,
      icon:"/instagram.png",
      url:''

    },
    {
      id:3,
      icon:"/twitter.png",
      url:''

    },
    {
      id:4,
      icon:"/facebook.png",
      url:''

    },
    {
      id:5,
      icon:"/linkedin.png",
      url:''

    }
  ]
  return (
     <div>
      <div className="grid gird-cols-1 md:grid-cols-4 border-[1px] p-5 mt-5 rounded-lg ">
        <div>
            <Image src={doctor.attributes?.Image?.data?.attributes?.url} 
            width={200}
            height={250} alt={"Doctor image"}
            className="rounded-lg h-[270px] object-cover"
            />
        </div>
        <div className="col-span-2 gap-3 flex flex-col items-baseline ">
            <h2 className="font-bold text-2xl mt-5">{doctor.attributes?.Name}</h2>
            <h2 className="flex gap-2 text-gray-500 text-md">
                <span>
                    {doctor.attributes?.year_of_experience} Years of Experience
                </span> 
            </h2>
            <h2 className="text-gray-700 ">{doctor.attributes?.Address}</h2>
            <h2 className="bg-blue-100 px-2 text-primary rounded-lg">
                  {doctor.attributes?.category?.data?.attributes?.Name}
            </h2>
            <div  className="flex gap-3">
              {
                socialMediaList.map((item,index)=>
                (
                  <Image src={item.icon} alt="Social Media Icon" key={index} height={40} width={40}/>


                ))
              }
            </div>
           
            <BookAppoinment doctor={doctor}/>
        </div>
        
      </div>
      <div className="border-[1px] p-5 mt-5 rounded-lg">
          <h2 className="font Bold text-[20px] ">About Me</h2>
          <p className="text-gray-500 tracking-wider  mt-2">{doctor.attributes?.About}</p>
        </div>
      </div>
  );
}

export default Doctordetails;
