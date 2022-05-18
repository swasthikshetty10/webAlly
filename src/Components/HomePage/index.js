import React from 'react'
import curvesvg from '../../Svg/CurveSvg'
import Contact from '../Contact'
import CourseDetails from '../CourseDetails'
import WhyUs from '../WhyUs'

function index() {
    return (<>
        <section className='min-h-screen'>

            <div className={`LandingPage   w-full pt-24 bg-gradient-to-tr from-purple-500 to-purple-700`} >
                <div className="transition-all mt-5 md:mb-0 mb-10 container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-around gap-20">
                    <div className="flex text-center md:text-start order-2 md:order-1 flex-col gap-5 cursor-pointer transition duration-500 ease-in-out ">
                        <div className="text-5xl md:text-6xl xl:text-7xl mb-4  flex flex-col">
                            <span className="font-bold mb-2 focus:none text-white">Edu Ark</span>
                            <p className="font-normal text-lg text-white">Learning to Love, Loving to Learn!</p>
                        </div>
                        <div>
                            <a className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 ">Start Exploring</a>
                        </div>
                    </div>
                    <div className="w-fit order-1 md:order-2  transition duration-500 ease-in-out ">
                        <img className='h-80  lg:h-96 ' src='/images/header-img.png' />
                    </div>
                </div>
                {curvesvg(false)}
            </div>
        </section>
        <section className='my-10 md:my-0 md:mb-10'>
            <h1 className='text-center text-3xl md:text-5xl  font-bold text-purple-700'>
                Why EduArk?
            </h1>
            <WhyUs />
        </section>
        <CourseDetails />
        <Contact />
    </>
    )
}

export default index