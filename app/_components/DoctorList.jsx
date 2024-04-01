import Image from "next/image";
import Link from "next/link";

function DoctorList({ doctorList,heading='Popular Doctors' }) {
  return (
    <div className="px-10">
      <h2 className="font-bold text-xl text-center">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7  p-5">
        { doctorList.length>0 ?
          doctorList.map((item, index) => (
            <div className="border-[1px] rounded-lg p-3 hover:border-primary hover:scale-105 transition-all ease-in-out shadow-lg" key={index}>
              <Image
                alt=""
                src={item.attributes.Image.data.attributes.url}
                width={500}
                height={500}
                className="w-full object cover rounded-lg"
              />
              <div className="mt-3 items-baseline flex flex-col gap-2">
                <h2 className="bg-blue-100 px-2 text-primary rounded-lg">
                  {item.attributes.category.data.attributes.Name}
                </h2>
                <label className="font-bold">{item.attributes?.Name}</label>
                <h2 className=" text-primary">
                  {item.attributes.year_of_experience} years
                </h2>
                <h2 className="text-gray-700 ">{item.attributes.Address}</h2>
                <Link href={'/details/'+item.id} className="w-full">
                <h2 className="p-2 px-3 border-[1px] border-primary rounded-full w-full text-center text-[15px] mt-2 cursor-pointer hover:bg-primary hover:text-white text-primary">
                  Book Now</h2>
                  </Link>
              </div>
            </div>
          ))
        :
        
        [1,2,3,4,5,6].map((item,index)=>(
                <div key={index} className=" h-[220px] bg-slate-200 rounded-lg animate-pulse ">
                </div>

            ))
        
       
        }
      </div>
    </div>
  );
}

export default DoctorList;
