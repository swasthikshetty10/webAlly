import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import curvesvg from '../../Svg/CurveSvg'
import Contact from '../Contact'
import CourseDetails from '../CourseDetails'
import Footer from '../Footer'
import WhyUs from '../WhyUs'

function index() {
    return (<>
        <section className='min-h-screen'>

            <div className={`LandingPage   w-full pt-24 bg-gradient-to-tr from-purple-500 to-purple-700`} >
                <div className="transition-all mt-5 md:mb-0 mb-10 container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-around gap-20">
                    <Slide direction='left' duration={700} >
                        <div className="flex text-center md:text-start order-2 md:order-1 flex-col gap-5 cursor-pointer transition duration-500 ease-in-out ">
                            <div className="text-5xl md:text-6xl xl:text-7xl mb-4  flex flex-col">
                                <span className="font-bold font-title mb-2 focus:none text-white">Edu Ark</span>
                                <p className="font-normal text-lg text-white">Learning to Love, Loving to Learn!</p>
                            </div>
                            <div>
                                <a href='#whyus' className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 ">Start Exploring</a>
                            </div>
                        </div>
                    </Slide>
                    <Slide direction='right' duration={700}>
                        <div className="w-fit order-1 md:order-2  transition duration-500 ease-in-out ">
                            <img className='h-80  lg:h-96 ' src='/images/header-img.png' />
                        </div>
                    </Slide>
                </div>
                {curvesvg(false)}
            </div>
        </section>
        <Fade delay={100} duration={500}>
            <WhyUs />
        </Fade>
        <CourseDetails />
        <Contact />

    </>
    )
}

export default index