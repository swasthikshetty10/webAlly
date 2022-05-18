import React from 'react'
import curvesvg from '../../Svg/CurveSvg'

function index() {
    return (
        <section className={`LandingPage  w-full pt-24`} >
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-evenly gap-10">
                <div className="flex flex-col gap-5 cursor-pointer">
                    <div className="text-5xl md:text-6xl xl:text-7xl   flex flex-col">
                        <span className="font-bold focus:none">techlifejournal</span>
                    </div>
                    <div>
                        <a className="bg-white dark:bg-black  font-bold py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-blue-900">Start Exploring</a>
                    </div>
                </div>
                <div className="">
                    <img className='h-full  lg:h-96 ' src='/header-img.png' />
                </div>
                <div>
                </div>
            </div>
            {curvesvg(false)}
        </section>
    )
}

export default index