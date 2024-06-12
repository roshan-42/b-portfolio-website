"use client";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [fix, setFix] = useState(false);

    useEffect(() => {
        const setFixed = () => {
            if (window.scrollY >= 10) {
                setFix(true);
            } else {
                setFix(false);
            }
        };
        
        window.addEventListener("scroll", setFixed);

        
        return () => {
            window.removeEventListener("scroll", setFixed);
        };
    }, []); 

    return (
      

                <div className={`${fix ? " h-10 fixed border border-1 " : " fixed h-16"} bg-white w-full py-4 flex  items-center justify-around transition-all ease-in-out`}>
            <p className='font-medium text-3xl'>BIJAY</p>
            <div className='text-gray-700 flex gap-4'>
                <p>Home</p>
                <p>Service</p>
                <p>Projects</p>
                <p>Resume</p>
                <p>Contacts</p>
            </div>
        </div>  
      
    
    );
};

export default Navbar;
