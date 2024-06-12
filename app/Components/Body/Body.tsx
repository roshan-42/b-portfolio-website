import React from 'react';

const Body = () => {
    return (
        <div className='bg-gray-100 flex items-center justify-center h-[80vh] rounded-3xl'>
            <div className='flex flex-col items-center  justify-center gap-3 '>
                <div className=' justify-center items-center flex flex-row flex-wrap  gap-5 text-3xl md:text-4xl lg:text-5xl font-bold font-simple'>
                    <p>I'M</p>
                    <p className='stroke-text '>Bijay</p>
                    <p>Bhattrai</p>
                </div>
                <div className='bg-white flex gap-10 w-fit p-4 px-5 text-gray-400 font-goodone text-sm md:text-base lg:text-lg'>
                    <p>React Developer</p>
                    <p>Graphics Designer</p>
                    <p>Video Editor</p>
                </div>
            </div>
        </div>
    );
}

export default Body;
