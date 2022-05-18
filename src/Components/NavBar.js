import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
function NavBar() {
    return (
        <nav className='p-5 flex justify-around text-purple-600'>
            <div>
                <h2>Logo</h2>
            </div>
            <div className='flex gap-5'>
                <a>Home</a>
                <a>Explore</a>
                <a>About</a>
                <a>Contact Us</a>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <BiSearchAlt2 />
                <button>Login</button>
            </div>

        </nav>
    )
}

export default NavBar