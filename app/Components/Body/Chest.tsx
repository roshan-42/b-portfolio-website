import Image from 'next/image'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GoDownload } from 'react-icons/go'
import { RiInstagramFill } from 'react-icons/ri'
import first from "@/public/first.jpg"
import { motion } from 'framer-motion'

const Chest = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center  gap-5 mt-10  p-2'>
            <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className=' border p-2 flex flex-col gap-4 items-center '>
                <Image className='rounded-xl' width={500}
                    height={500} src={first} alt="" />
                <p className='font-bold font-goodone text-3xl'>Dr Beejay Bhattrai</p>
                <div className='flex gap-5'>

                    <button className='border p-2'><FaFacebook /></button>
                    <button className='border p-2'><FaXTwitter /></button>
                    <button className='border p-2'><RiInstagramFill /></button>
                    <button className='border p-2'><FaFacebook /></button>


                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className='flex flex-col gap-5 items-center '>
                <p className='text-4xl sm:text-5xl md:text-7xl font-medium font-goodone text-gray-600 text-center'>
                Hello, I'm Dr. Bijay Bhattarai, a veterinarian.

                </p>
                <button className='bg-black px-5 p-2 flex gap-3 items-center text-white text-3xl w-fit hover:bg-white hover:text-black transition-all hover:border ease-in-out'>Download CV <GoDownload /></button>


            </motion.div>
        </div>
    )
}

export default Chest