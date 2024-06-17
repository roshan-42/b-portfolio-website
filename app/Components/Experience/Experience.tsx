import { motion } from 'framer-motion'
import React from 'react'
import { LuBookMinus } from 'react-icons/lu'

const Experience = () => {
    return (
        <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }} className='flex items-center flex-col justify-center text-gray-600 p-4 gap-5'>
            <div className='flex flex-col items-center '>
                <h1>Experience</h1>
                <h2 className='text-5xl text-black'>Professional Resume</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 border gap-4  w-full place-items-center '>
                {/* first */}
                <div className='flex flex-col gap-10 border border-gray-300 p-10 h-80 rounded-xl '>
                    <div className='flex items-center gap-5   '>
                        <div className='bg-white p-3 rounded-xl'>
                            <LuBookMinus size={40} />
                        </div>
                        <div className='flex flex-col'>
                            <h1>
                                16th-22th Sept 2020
                            </h1>
                            <p className=' md:text-2xl font-semibold '> Hatchery Management Training</p>

                        </div>

                    </div>
                    <div className='flex items-center gap-5 '>
                        <div className='bg-white p-3 rounded-xl'>
                            <LuBookMinus size={40} />
                        </div>
                        <div className='flex flex-col'>
                            <h1>
                                14th to 19th Jan 2023
                            </h1>
                            <p className='md:text-2xl font-semibold '> Advance Poultry Nutrition and Feed Milling</p>

                        </div>

                    </div>
                </div>
                {/* second */}
                <div className='flex flex-col gap-10 border border-gray-300 p-10  h-80  rounded-xl'>
                    <div className='flex items-center gap-5   '>
                        <div className='bg-white p-3 rounded-xl'>
                            <LuBookMinus size={40} />
                        </div>
                        <div className='flex flex-col'>
                            <h1>
                                4th July - 5th Agust  2023
                            </h1>
                            <p className='md:text-2xl font-semibold '>National Avian Disease Investigation Laboratory, Chitwan</p>

                        </div>

                    </div>
                    <div className='flex items-center gap-5 '>
                        <div className='bg-white p-3 rounded-xl'>
                            <LuBookMinus size={40} />
                        </div>
                        <div className='flex flex-col'>
                            <h1>
                                2022 - Present
                            </h1>
                            <p className='md:text-2xl font-semibold '> Assistant Technical Manager
                                Hygiene Agro Pvt.Ltd</p>

                        </div>

                    </div>
                </div>

                <div>

                </div>



            </div>

        </motion.div>
    )
}

export default Experience