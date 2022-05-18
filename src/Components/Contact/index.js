import React, { useRef, useState } from 'react'
import { Slide, Fade, Zoom, Flip, } from "react-awesome-reveal";
import { AiOutlineLoading3Quarters } from "react-icons/ai"

function Contact() {
    const [isLoading, setLoading] = useState(false);

    return (
        <section id="contact" className="pb-20">
            <svg className=" rotate-180 w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon className="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon></svg>
            <div className="bg-white">
                <Zoom>
                    <h1 className="w-full py-2 text-3xl sm:text-5xl font-bold leading-tight text-center text-gray-800">
                        Contact Us
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto  bg-gradient-to-r from-farmoid-c1 to-farmoid-c2  w-28 sm:w-48 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                </Zoom>

                <div
                    className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 mx-auto  text-gray-900 rounded-lg ">
                    <Slide direction="left" >
                        <div className="flex flex-col justify-between">
                            <div>
                                <h2 className="text-4xl lg:text-4xl md:pr-5 font-bold  leading-tight">Connect with our support team to know more!</h2>
                                <div className="text-gray-700 mt-8">
                                    Hate forms? Send us an <a className="cursor-pointer  underline" href="mailto:farmoidrobotech@gmail.com">email</a> instead.
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
                                    className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="" required />
                            </div>
                            <div className="mt-8">
                                <label className="uppercase text-sm text-gray-600 font-bold">Email</label>
                                <input
                                    className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    name="email" type="email" required />
                            </div>
                            <div className="mt-8">
                                <label className="uppercase text-sm text-gray-600 font-bold">Message</label>
                                <textarea
                                    required name="message" className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div className="mt-8">
                                <button
                                    className="uppercase text-sm font-bold tracking-wide bg-gradient-to-r from-farmoid-c2 to-farmoid-c4 bg-opacity-80 flex  text-gray-100 p-3 rounded-lg w-full hover:bg-opacity-50 focus:outline-none focus:shadow-outline items-center justify-center gap-3"
                                    type="submit"
                                >
                                    <AiOutlineLoading3Quarters className=" animate-spin" />  Send Message
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