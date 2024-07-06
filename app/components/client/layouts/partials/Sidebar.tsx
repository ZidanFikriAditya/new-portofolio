"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { EDUCATIONS } from '@/utils/education'
import { WORK_EXPERIENCES } from '@/utils/workExperience'

const Sidebar = () => {
  const [active, setActive] = React.useState<number | null>(null)

  return (
    <div className={`col-span-2`}>
      <div className='w-full bg-primary rounded-lg p-4'>
        <div className="d-flex w-full justify-center bg-success p-3 rounded-md">
          <Image src='/logo.jpeg' width={100} height={100} className='rounded-full mx-auto' alt='Profile' />
          <h2 className='text-center text-black mt-3 text-xl font-bold'>Zidan Fikri Aditya</h2>
          <p className='text-center text-black'>- Web Developer - </p>
        </div>
        <div className='mt-8'>
          <div className='mb-5'>
            <h2 className='text-xl font-bold text-black border-b border-black mb-3'>Work Experienxe</h2>
            {WORK_EXPERIENCES.map((work, index) => (
              <div key={index} className='my-2 group'>
                <div className={`p-2 block mb-1 ${active == index ? 'bg-info text-white' : 'bg-success text-black'} rounded-md hover:pl-4 hover:duration-300 duration-300 hover:bg-info hover:text-white group font-semibold cursor-pointer`} onClick={() => setActive(index)}>
                  {work.name}
                </div>
                <div className={`bg-info p-3 rounded-md text-sm ${active == index ? 'block' : 'hidden group-hover:block'}`}>
                  <ul>
                    <li>
                      <span className='text-white group-hover:text-white'><b>Position:</b> {work.position}</span>
                    </li>
                    <li>
                      <span className='text-white group-hover:text-white'><b>Start:</b> {work.start}</span>
                    </li>
                    <li>
                      <span className='text-white group-hover:text-white'><b>End:</b> {work.end}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className='mb-5'>
            <h2 className='text-xl font-bold text-black border-b border-black mb-3'>Education</h2>
            {EDUCATIONS.map((menu, index) => (
              <Link href={menu.link} key={index} className='p-2 block bg-success my-2 rounded-md hover:pl-4 hover:duration-300 duration-300 hover:bg-info hover:text-white group font-semibold cursor-pointer'>
                <span className='text-black group-hover:text-white'>{menu.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar