import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div>

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt=""
          src="/doctors.png"
          width={800}
          height={800}
          className="absolute inset-0 h-full w-full object-cover rounded-3xl"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Find & <span className='text-indigo-900'> Book </span> Your <span className='text-indigo-900'>Appoiment</span> With Your Fav  <span className='text-indigo-900'> Doctors </span></h2>

        <p className="mt-4 text-gray-600">
        Access video consultation with India’s top doctors on the BookMyDoctor Web App. Connect with doctors online, available 24/7, from the comfort of your home.
        </p>
      
       
        <Link href={'/search/Cardiologist'}>
        <Button className='mt-10'>Explore Now</Button>
        </Link>
        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero