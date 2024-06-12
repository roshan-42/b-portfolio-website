"use client";
import React, { useState, useEffect } from 'react';
import Ham from '../Hamburgericon/Ham';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
    const [fix, setFix] = useState(false);
    const [showmenu, setShowMenu] = useState(false);

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


        <div className={`${fix ? " h-10 fixed border border-1 " : " fixed h-16"}  bg-white w-full py-4 flex  items-center justify-around transition-all ease-in-out`}>
            <p className='font-medium text-3xl'>BIJAY</p>
            {/* //Large Screen */}
            <div className='text-gray-700  gap-4 hidden lg:flex'>
                <p>Home</p>
                <p>Service</p>
                <p>Projects</p>
                <p>Resume</p>
                <p>Contacts</p>
            </div>
            {/* //Small Screen */}
            <div className={` ${showmenu ? "flex top-16" : "-top-80 "} absolute  right-10 sm:right-20 w-80 p-5 bg-gray-600 text-gray-200  gap-4  flex flex-col  transition-all ease-in-out`}>
                <p>Home</p>
                <p>Service</p>
                <p>Projects</p>
                <p>Resume</p>
                <p>Contacts</p>
            </div>
            <button onClick={() => setShowMenu(!showmenu)} className={` ${showmenu ? "hidden" : "flex"} transition-all lg:hidden  `}>
                <RxHamburgerMenu size={30} />

            </button>
            <button onClick={() => setShowMenu(!showmenu)} className={` ${showmenu ? "flex" : "hidden"}  transition-all ease-in-out lg:hidden `}><IoCloseOutline size={35} /></button>

        </div>


    );
};

export default Navbar;
