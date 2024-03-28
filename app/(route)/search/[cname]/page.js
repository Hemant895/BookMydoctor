'use client'
import DoctorList from '@/app/_components/DoctorList'
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

function Search({params}) {
  const [doctorList,setDoctorList]= useState([])
  useEffect(()=>{
    getDoctors()
  },[])

  const getDoctors =()=>{
    GlobalApi.getDoctorByCategory(params.cname).then((res)=>{
    setDoctorList(res.data.data);
    })
  }
  return (
    <div className='p-5'>
      <DoctorList heading={params.cname} doctorList={doctorList}/>
    </div>
  )
}

export default Search