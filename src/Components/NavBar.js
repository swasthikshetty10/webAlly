import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
function NavBar() {

    const [click, setClick] = useState(0)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const scrollFn = () => {
          setOffset(window.pageYOffset)
        }
        window.addEventListener('scroll', scrollFn)
      }, [offset])

    const handleHamburger = () => {
        if (click === 0) {
          document.getElementById('mobile-menu-4').classList.add('hidden')
          document.getElementById('mobile-menu-4').classList.add('visible')
          setClick(1)
        } else {
          document.getElementById('mobile-menu-4').classList.add('visible')
          document.getElementById('mobile-menu-4').classList.remove('hidden')
          setClick(0)
        }
      }

    return (
        <nav className={`${offset > 100  ? 'bg-white text-purple-500 py-3' : 'py-5'} transition-all  fixed z-[100] text-white w-screen p-3 shadow-md backdrop-blur-sm flex items-center justify-between px-[40px] text-black`}>
             <button
              data-collapse-toggle='mobile-menu-4'
              type='button'
              onClick={handleHamburger}
              className={`ml-2 inline-flex items-center p-2 text-sm text-white rounded-lg  md:hidden transition-all ease-out duration-150 hover:scale-125 `}
              aria-controls='mobile-menu-4'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <svg
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
                <div>
                    <h2 className='text-xl font-bold'>Edu Ark</h2>
                </div>
                <div id='mobile-menu-4' className='md:flex md:w-auto hidden transition-all md:flex-row flex-col  items-center justify-center'>
                    <a className='px-4 cursor-pointer hover:opacity-70  border-gray-500/50'>Home</a>
                    <a className='px-4 cursor-pointer hover:opacity-70 md:border-l-[1px] border-gray-300'>Explore</a>
                    <a className='px-4 cursor-pointer hover:opacity-70 md:border-l-[1px] border-gray-300'>About</a>
                    <a className='px-4 cursor-pointer hover:opacity-70 md:border-l-[1px] border-gray-300'>Contact Us</a>
                </div>
            <div className='flex items-center justify-center gap-2'>
                <button
                    className={`rounded-lg px-3 py-1 hover:opacity-70 text-2xl transform hover:scale-105 ease-linear duration-200 font-semibold `}
                >
                    <BiSearchAlt2 />
                </button>
                <button className={`${offset > 100  ? 'border-purple-500' : 'border-white'} rounded-lg border-2 px-3 py-1  hover:opacity-70 hover:bg-gray-200/10 transform ease-linear duration-200 font-semibold `}>Login</button>
            </div>

        </nav>
    )
}

export default NavBar