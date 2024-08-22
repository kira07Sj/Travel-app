'use client'
import Image from "next/image"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { FEATURES } from "@/constant"

const Features = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
},[])

  return (
    <section className='border-2 border-blue-700 max-conatiner padding-container
    flex-col flexCenter overflow-hidden bg-feature-bg
     bg-no-repeat py-24'>
      <div className='max-conatiner 
       relative w-full justify-end flex'>
        <div className="flex flex-1 lg:min-h-[900px]">
        <Image src="/phone.png" width={440}
        height={1000} alt="phone" className="feature-phone"
        />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]
        ">
          <div className="relative ">
          <Image src="/camp.svg" data-aos="fade-in" data-aos-delay="500"
        width={50} height={50} alt="camp" className="absolute
        left-[-5px] top-[-28px] w-10 lg:w-[50px]"/>
        <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className=" mt-10 grid gap-10 md:grid-cols-2 lg:mt-20
           lg:gap-20">
            {FEATURES.map((item)=>(
              <FeatureItem
              key={item.title}
              title={item.title}
              icon={item.icon}
              variant={item.variant}
              description={item.description}/>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem ={
  title: string;
  icon: string;
  variant: string;
  description: string;
  
}

const FeatureItem = ({title,icon,variant,description}:
  FeatureItem) =>{
  return (
    <li className="flex w-full flex-1 flex-col items-start
    " data-aos="slide-up">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon}
        alt="map" width={28} height={28}/>
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}</h2>
      <p className="regular mt-5 bg-white/80
      text-gray-30 lg:mt-[30px] lg:bg-none">{description}</p>
    </li>
  )
}

export default Features
