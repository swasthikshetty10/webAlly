import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
function NavBar() {
    return (
        <nav className='fixed z-[100] w-screen p-3 shadow-sm flex items-center justify-between px-[40px] text-black'>
            <div>
                <h2>Edu Ark</h2>
            </div>
            <div className='flex h-6 items-center justify-center'>
                <a className='px-4 cursor-pointer hover:opacity-70  border-gray-500/50'>Home</a>
                <a className='px-4 cursor-pointer hover:opacity-70 border-l-[1px] border-gray-500/30'>Explore</a>
                <a className='px-4 cursor-pointer hover:opacity-70 border-l-[1px] border-gray-500/30'>About</a>
                <a className='px-4 cursor-pointer hover:opacity-70 border-l-[1px] border-gray-500/30'>Contact Us</a>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <button
                    className='rounded-lg text-purple-600 px-3 py-1 text-2xl transform hover:scale-105 ease-linear duration-200 font-semibold border-purple-600 '
                >
                    <BiSearchAlt2 />
                </button>
                <button className='rounded-lg border-2 text-purple-600 px-3 py-1 hover:bg-purple-600 hover:text-white transform ease-linear duration-200 font-semibold border-purple-600 '>Login</button>
            </div>

        </nav>
    )
}

export default NavBar