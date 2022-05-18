import React from 'react'
import curvesvg from '../../Svg/CurveSvg'
import CourseDetails from '../CourseDetails'

function index() {
    return (<>
        <section className='h-screen'>

            <div className={`LandingPage   w-full pt-24 bg-gradient-to-tr from-purple-500 to-purple-700`} >
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-around gap-20">
                    <div className="flex flex-col gap-5 cursor-pointer hover:-tranlate-x-10 transition duration-500 ease-in-out hover:scale-105">
                        <div className="text-5xl md:text-6xl xl:text-7xl   flex flex-col">
                            <span className="font-bold focus:none text-white">Edu Ark</span>
                        </div>
                        <div>
                            <a className="bg-white   font-bold py-2 px-4 rounded-full hover:bg-gray-100 ">Start Exploring</a>
                        </div>
                    </div>
                    <div className="w-fit hover:translate-x-10   transition duration-500 ease-in-out hover:scale-105">
                        <img className='h-full  lg:h-96 ' src='/images/header-img.png' />
                    </div>
                </div>
                {curvesvg(false)}
            </div>
        </section>
        <CourseDetails /></>
    )
}

export default index