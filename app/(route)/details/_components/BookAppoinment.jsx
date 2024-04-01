"use client"
import  { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { CalendarDays, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";

function BookAppoinment({doctor}) {
  const [date, setDate] = useState(new Date());
  const [timeSlot ,setTimeSlot]= useState();
  const [selectedTimeSlot ,setselectedTimeSlot]= useState();
  const {user}= useKindeBrowserClient()

  useEffect(()=>{
    getTime()
  },[])
  const getTime = ()=>{
    const timeList = [];
    for(let i =10;i<=12;i++){
        timeList.push({
            time:i + ":00 AM"
        })
        timeList.push({
            time:i + ":30 AM"
        })
    }
    for(let i =1;i<=6;i++){
        timeList.push({
            time:i + ":00 PM"
        })
        timeList.push({
            time:i + ":30 PM"
        })
    }
    setTimeSlot(timeList)
  }
  const saveBooking = ()=>{
    const data = {
        data:{
            userName:user.given_name+""+ user.family_name,
           Email:user.email,
           Date:date,
            Time: selectedTimeSlot,
           doctor: doctor.id,
            Note:"first booking"
        }
    }
    GlobalApi.bookAppoinment(data).then((res)=>{
        console.log(res)
        if (res){
           toast("Booking confirmation sent on Email");
        }else{        
            toast("error");
          }
    })}
  
  
  return (
    <div >
        
      <Dialog>
        <DialogTrigger>
        <Button className='mt-5 rounded-full'>Book An Appoinment</Button> 
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center items-center">Book Appoinment</DialogTitle>
            <DialogDescription>
              <div className="flex">
                <div className="grid grid-cols-1 px-3  md:grid-cols-2 mt-5 items-center text-center">
                  <div className="flex flex-col gap-3 px-4 lg:px-3 items-baseline">
                    {/* calender */}
                    <h2 className="flex gap-3 items-center  mb-5">
                        <CalendarDays className="text-primary h-5 w-5"/>
                        Select Date
                    </h2>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                     
                      disabled={(date) =>
                        date <= new Date() 
                      }
                      className="rounded-md border"
                    />
                  </div>
                  <div className="mt-5 lg:mt-0 px-4 lg:px-3" >{/* Time Slot */}
                  <h2 className="flex gap-3 items-center lg:mb-8 mb-5 ">
                        <Clock className="text-primary h-5 w-5 "/>
                        Select Time Slot
                    </h2>
                  <div className="grid grid-cols-3 gap-3 border-[1px] rounded-lg p-2 ">
                   
                    {
                        timeSlot?.map((item,index)=>(
                            <div>
                                <h2 
                            onClick={()=>setselectedTimeSlot(item.time)} key={index}
                            className={`p-2 rounded-full border hover:bg-primary cursor-pointer hover:text-white ${item.time == selectedTimeSlot &&'bg-primary text-white'}`}>{item.time}</h2>
                            </div>
                            
                        ))
                    }
                     
                  </div>
                 
                  </div>
                </div>
              </div>
              
            </DialogDescription>
            <textarea class="resize rounded-md h-20 border-[2px]" > Note</textarea>
          </DialogHeader>
          
         
          <DialogFooter>
            <DialogClose asChild className="gap-3 flex justify-between">
               <div>
                <Button type="button" variant="outline" className='text-red-500 border-red-500 rounded-full '>
                Close</Button>
                <Button onClick={()=>(saveBooking())} type="button" disabled={!(date&& selectedTimeSlot)} className='rounded-full '>
                Submit</Button>
                </div>
            
            </DialogClose>
      
    </DialogFooter>
        </DialogContent>
       
      </Dialog>
    </div>
  );
}

export default BookAppoinment;
