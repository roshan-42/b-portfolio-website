import Image from 'next/image'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GoDownload } from 'react-icons/go'
import { RiInstagramFill } from 'react-icons/ri'

const Chest = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center  gap-5 mt-10  p-2'>
            <div className=' border p-2 flex flex-col gap-4 items-center '>
                <Image className='rounded-xl' width={1000}
                    height={1000} src="https://cdn.pixabay.com/photo/2023/03/01/03/21/racial-7822176_1280.jpg" alt="" />
                <p className='font-bold font-goodone text-3xl'>Dr Beejay Bhattrai</p>
                <div className='flex gap-5'>

                    <button className='border p-2'><FaFacebook /></button>
                    <button className='border p-2'><FaXTwitter /></button>
                    <button className='border p-2'><RiInstagramFill /></button>
                    <button className='border p-2'><FaFacebook /></button>


                </div>
            </div>
            <div className='flex flex-col gap-5 '>
                <p className='text-4xl sm:text-5xl md:text-7xl font-medium font-goodone text-gray-600'>
                    Hello, I'm Dr. Bijay Bhattrai, React/Next JS Developer.

                </p>
                <button className='bg-black px-5 p-2 flex gap-3 items-center text-white text-3xl w-fit hover:bg-white hover:text-black transition-all hover:border ease-in-out'>Download <GoDownload /></button>


            </div>
        </div>
    )
}

export default Chest