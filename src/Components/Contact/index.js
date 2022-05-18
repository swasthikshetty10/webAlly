import React, { useRef, useState } from 'react'
import { Slide, Fade, Zoom, Flip, } from "react-awesome-reveal";

function Contact() {

    return (
        <section id="contact" className="min-h-screen mt-20 pb-20">
            {/* <svg className=" rotate-180 w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon className="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon></svg> */}
            <div className="bg-white">
                <Zoom >
                    <h1 className="text-purple-600 w-full py-2 text-3xl sm:text-5xl font-bold leading-tight text-center">
                        Contact Us
                    </h1>
                </Zoom>

                <div
                    className="max-w-screen-xl mt-16 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 mx-auto  text-gray-900 rounded-lg ">
                    <Slide direction="left" >
                        <div className="flex flex-col justify-between">
                            <div className='mb-10'>
                                <h2 className="text-4xl lg:text-4xl mb-5 md:pr-5 font-bold  leading-tight">Connect with our support team to know more!</h2>
                                <div className="text-gray-700">
                                    Hate forms? Send us an <a className="cursor-pointer  underline" href="mailto:eduark@test.edu">email</a> instead.
                                </div>
                            </div>
                            <img src="/images/contactus.svg" />
                        </div>
                    </Slide>
                    <Slide direction="right">

                        <form >
                            <div>
                                <label className="uppercase text-sm text-gray-600 font-bold">Full Name</label>
                                <input
                                    className="w-full bg-gray-200/70 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="" required />
                            </div>
                            <div className="mt-8">
                                <label className="uppercase text-sm text-gray-600 font-bold">Email</label>
                                <input
                                    className="w-full bg-gray-200/70 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    name="email" type="email" required />
                            </div>
                            <div className="mt-8">
                                <label className="uppercase text-sm text-gray-600 font-bold">Message</label>
                                <textarea
                                    required name="message" className="w-full h-32 bg-gray-200/70 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div className="mt-8">
                                <button
                                    className="uppercase text-sm font-bold tracking-wide text-white from-purple-400 to-purple-500 bg-gradient-to-r bg-opacity-80 flex p-3 rounded-lg w-full hover:bg-opacity-50 focus:outline-none focus:shadow-outline items-center justify-center gap-3"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div>
                            <br />
                        </form>
                    </Slide>
                </div>
            </div>
        </section>
    )
}

export default Contact