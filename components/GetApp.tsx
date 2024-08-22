'use client'
import Button from "./Button"
import Image from "next/image"
import { useEffect } from 'react';
import Aos from "aos"
import 'aos/dist/aos.css'

const Getapp = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
},[])

  return (
    <section className='flexCenter w-full flex-col pb-[100px]
    ' data-aos="fade-in">
      <div className='get-app'>
        <div className='z-20 flex w-full flex-col
        items-start justify-center gap-12'>
          <h2 className='bold-40 lg:bold-64
          xl:max-w-[320px]'>Get for free now!</h2>
          <p className=' regular-16 text-gray-10
          '>Available on ios and Androis</p>

          <div className="w-full flex flex-col gap-4
          whitespace-nowrap xl:flex-row">
            <Button type="button"
            title="App Store"
            icon="/apple.svg"
            variant="btn_white"
            full/>
            
            <Button type="button"
            title="Play Store"
            icon="/android.svg"
            variant="btn_dark_green_outline"
            full/>
            

          </div>
        </div>
        <div className="flex items-center 
        justify-end">
          <Image src="/phones.png" width={550}
        height={870} alt="phone"  />
        </div>
      </div>
    </section>
  )
}

export default Getapp
