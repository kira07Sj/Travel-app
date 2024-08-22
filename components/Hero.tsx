'use client'

import Image from "next/image"
import { useEffect } from 'react';
import Aos from "aos"
import 'aos/dist/aos.css'
import Button from "./Button";

const Hero = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

  return (
    <section className=' max-container padding-container
     flex flex-col gap-20
    py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      
      <div className='hero-map'/>

      <div className=' relative flex flex-1 z-20 flex-col
      xl:w-1/2'>
        <Image alt="camp" width={50} height={50} 
        src={'/camp.svg'} className=" absolute 
        left-[-5px] top-[-30px] w-10 lg:w-[50px]" 
        data-aos='fade-in' data-aos-delay="2300"/>

        <h1  className="bold-52 lg:bold-88 mt-1
         max-xs:bold-32" data-aos='fade-right'>Putuk 
            Truno Camp Area</h1>
        <p className=" regular-16 mt-6 text-grey-30
         xl:max-w-[520px]" data-aos='fade-right' data-aos-delay="100">
            We want to be on each of 
         your journeys seeking the satisfaction of 
         seeing the incorruptible beauty of nature. 
         We can help you on an adventure around the 
         world in just one app</p>

         <div className="my-11 flex flex-wrap gap-5" 
         data-aos='fade-right' data-aos-delay="200">
            <div className=" flex items-center gap-2">
                {Array(5).fill(1).map((_,index)=>(
                   <Image src="/star.svg" width={24}
                   height={24} alt="star"/> 
                ))}
            </div>

            <p className=" bold-16 lg:bold-20
             text-blue-70">198K <span className=" regular-16
             lg:regular-20 ">
                Excellent Reviews</span></p>
         </div>

         <div className=" flex sm:flex-row w-full gap-3 flex-col">
           <div data-aos='fade-down' data-aos-delay="300">
           <Button type="button" 
            title="Download App" 
            variant="btn_green" />
           </div>

            <div data-aos='fade-down' data-aos-delay="400">
            <Button type="button" 
            title="How to Use" 
            variant="btn_white_text "
            icon="/play.svg" />
            </div>

         </div>

      </div>

      <div className=" relative flex flex-1 items-center 
       -mt-10 xxs-card" data-aos="fade-down">
        <div className=" relative z-20
         flex-col gap-8 rounded-3xl bg-green-90 
         px-7 py-10 ">
            <div className="flex flex-col">
                <div className="flexBetween">
                    <p className="regular-16 text-gray-20">Location</p>
                    <Image src="/close.svg" alt="close" width={24} height={24}/>
                </div>
                <p className="bold-20 text-white mb-4">Aguas Calientes</p>
                <div className=" flex gap-20">
                <div  className="flexBetween">
                    <div className="flex flex-col">
                        <p className="regular-16 block text-gray-20">Distance</p>
                        <p className="bold-20 text-white">173.28 mi</p>
                    </div>
                </div>

                <div  className="flexBetween">
                    <div className="flex flex-col">
                        <p className="regular-16 block text-gray-20">Elevation</p>
                        <p className="bold-20 text-white">2.040 km</p>
                    </div>
                </div>
                </div>
            </div>
         </div>
       </div>
    </section>
  )
}

export default Hero
