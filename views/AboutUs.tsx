import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
   <section className="  rounded text-white py-6">
      
      <div className=" mx-auto px-6 py-20 md:px-12 grid md:grid-cols-2 gap-10 items-center  ">
      <div>
        <p className="text-[#08568A] text-[16px] font-medium ">About US</p>
        <p
          className="font-nunito font-bold text-4xl leading-tight  tracking-tight">
          Building the future of cloud <br /> innovation
        </p>
        <p className="text-[#333333] text-[18px] ">
          CloudAdore is more than just a community, it's a movement. We bring
          together passionate individuals who believe in the transformative
          power of cloud technology. Through collaboration, education, and
          shared experiences, we're shaping the future of the cloud ecosystem.
          From beginners taking their first steps to seasoned professionals
          pushing boundaries, everyone has a place in our inclusive community.
        </p>
        <Button className="text-blue-400 outline-blue-500 rounded-lg bg-white mt-4">Learn More</Button>
      </div>
      <Image
        src="/Rectangle 1457.svg"
        alt="features"
        width={540}
        height={435}
        // className=" rounded-lg "
      />
    </div>
    </section>
  )
}

export default AboutUs