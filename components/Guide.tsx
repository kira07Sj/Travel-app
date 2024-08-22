'use client'
import Image from "next/image"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"


const Guide = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
},[])

  return (
    <section className="flexCenter flex-col pb-10">
      <div className=" padding-container
      max-container w-full pb-24">
        <Image src="/camp.svg" data-aos="fade-in" data-aos-delay="500"
        width={50} height={50} alt="camp"/>
        <p className=" uppercase regula-18 -mt-1 mb-3
         text-green-50" data-aos="fade-right" data-aos-delay="200">
          we are here for you!</p>
          <div className="flex flex-wrap justify-between gap-5
          lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]"
            data-aos="fade-right" >
              Guide You to Easy Path</h2>
              <p className="regular-16 text-gray-30 xl:max-w-[520px]
              " data-aos="fade-left" data-aos-delay="300">
                Only with the hilink application you will
                no longer get lost and get lost again, because
                we already support offline maps when there is no internet
                connection in the field. Invite your friends, relatives
                and family to have fun in the wilderness through the 
                valley and reach the top of the mountain
              </p>
          </div>
      </div>

      <div className=" flexCenter max-container relative
      w-full">
        <Image src="/boat.png" width={1440} height={580}
         alt="boat" className="w-full object-cover
          object-center 2xl:rounded-5xl" data-aos="fade-in"/>

          <div className=" absolute max-sm:-top-5 flex flex-row bg-white py-8
           pl-7 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%]
           lg: top-20 xxs-card">
            <Image src="/meter.svg" width={16} height={158}
             alt="meter" className="-mt-2" />
            <div className="flex flex-col gap-6">
            <div className="flexBetween flex-col">
              <div className="flex w-full flex-col">
                <div className="flexBetween w-full">
                  <p className="regular-16 text-gray-20">Destination</p>
                  <p className="bold-16 text-green-50">48 min</p>
                </div>
                <p className="bold-20 mt-2">Aguas Calientes</p>
              </div>
            </div>

            <div className="flexBetween flex-col">
            
                <div className="flex w-full flex-col">
                  <p className="regular-16 text-gray-20">Start track</p>
                  <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
              </div>
            </div>

           </div>
            </div>
      </div>
    </section>
  )
}

export default Guide
