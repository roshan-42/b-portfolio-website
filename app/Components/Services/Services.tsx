import React from 'react'
import { CgSmartphone } from 'react-icons/cg'
import { IoIosLeaf } from 'react-icons/io'
import { RiEarthLine } from 'react-icons/ri'

const Services = () => {


  return (
    <div className='flex flex-col items-center p-10 py-20'>
    <div className='flex flex-col gap-5 items-center p-5'>
    <p className='text-xl'>Services</p>
        <div className='text-5xl font-bold'>
            Quality Services
    </div>
        
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-4  p-4'>
            
            <div className='border flex flex-col gap-4 p-8 bg-gray-100'>
        <RiEarthLine size={100} color='gray'/>
            <h2 className='text-2xl font-bold'>Brand design Identity</h2>
            <p className='text-gray-400'>Kane gives you the blocks & kits you need to create a true website within minutes.</p>
        </div>
        <div className='border flex flex-col gap-4 p-8 bg-gray-100'>
        <IoIosLeaf size={100} color='gray' />
            <h2 className='text-2xl font-bold'>Brand design Identity</h2>
            <p className='text-gray-400'>Kane gives you the blocks & kits you need to create a true website within minutes.</p>
        </div>
        <div className='border flex flex-col gap-4 p-8 bg-gray-100'>
        <CgSmartphone size={100} color='gray' />
            <h2 className='text-2xl font-bold'>Brand design Identity</h2>
            <p className='text-gray-400'>Kane gives you the blocks & kits you need to create a true website within minutes.</p>
        </div>
            </div>
       
      
        </div>
       

  )
}

export default Services