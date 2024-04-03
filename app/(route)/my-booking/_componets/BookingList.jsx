
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import CancelAppoinment from './CancelAppoinment'
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from 'sonner'
  
function BokingList({bookingList,expired,updateRecord}) {
    const onDeleteBooking=(item)=>{
      GlobalApi.DeleteAppoinment(item.id).then((res)=>{
        if(res){
          toast.success("Deleted uccessfully");
          updateRecord();
        }
      }) 
        console.log(item);
    }
  return (
    <div>
        {
           bookingList&&bookingList.map((item,index)=>(
                <div key={index} className="flex gap-4 items-center border m-3 p-5 rounded-lg"> 
                   <Image
                alt=""
                src={item.attributes.doctor.data.attributes.Image.data.attributes.url}
                width={70}
                height={70}
                className=" object cover rounded-full h-[70px] w-[70px]"
              />
              <div className='flex flex-col gap-2 w-full'>
               <h2 className='font-bold text-[18px] items-center flex md:justify-between gap-3'>{item.attributes.doctor.data.attributes.Name}
               {!expired&&<CancelAppoinment onContinueClick={()=>onDeleteBooking(item)}/>}
               </h2>
               <h2 className='flex gap-2 text-gray-500'><MapPin className='text-primary  h-5 w-5'/> {item.attributes.doctor.data.attributes.Address}</h2>
               <h2 className='flex gap-2 '> <CalendarDays className='text-primary h-5 w-5'/>Appoinmenr On : {moment(item.attributes.Date).format('DD-MMM-YYYY')}</h2>
               <h2 className='flex gap-2 '> <Clock className='text-primary  h-5 w-5' /> At Time : {item.attributes.Time}</h2>
              </div>

                </div>

            ))
        }
    </div>
  )
}

export default BokingList