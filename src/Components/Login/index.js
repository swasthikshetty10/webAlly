import React, { useState, useEffect, useContext, useRef } from 'react';
import { FaGithubSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
function Login() {
    const errorDisplay = useRef(null)
    const [Loading, setLoading] = useState(false);
    const initialFormData = Object.freeze({ email: '', password: '', });
    const [formData, updateFormData] = useState(initialFormData);
    const handleChange = (e) => {
        updateFormData({
            ...formData, [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

    };
    return (
        <div>
            <div style={{ backgroundImage: "url('/images/home-banner-bg.png')" }} className="min-h-screen  flex flex-col">
                <div className="container max-w-sm mx-auto flex-1  flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit} className="md:-mt-16 px-6 py-8 backdrop-blur-sm bg-white rounded shadow-md w-full">
                        <h1 className="mb-8 text-3xl font-semibold text-center">Log In</h1>


                        <input
                            type="email"
                            className="block border   focus:outline-none border-gray-light focus:border-purple-500 w-full p-3 rounded mb-4"
                            name="email"
                            onChange={handleChange}
                            placeholder="Email" required />

                        <input
                            type="password"
                            className="block  border focus:outline-none border-gray-light focus:border-purple-500 w-full p-3 rounded mb-4"
                            name="password"
                            onChange={handleChange}
                            placeholder="Password" required />
                        <div className="text-center"><a className="text-red-500 " ref={errorDisplay}></a></div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 text-center py-3 rounded bg-purple-600 hover:bg-purple-700 text-white hover:bg-green-dark focus:outline-none my-1"
                            disabled={Loading ? true : false}
                        >
                            {Loading ? <><AiOutlineLoading3Quarters className="animate-spin" /><span>Logging In</span></> : "Log In"}</button>
                        <a className="  text-purple-700" >Forgot password?</a>
                        <div className="flex w-full flex-col justify-center text-center mt-8  ">
                            <div className="flex flex-row text-gray-800  items-center">
                                <span className="bg-gray-500 w-full h-0.5"></span>
                                <span className="w-full whitespace-nowrap " >Or log in with</span>
                                <span className="bg-gray-500 w-full h-0.5"></span>
                            </div>

                            <div className="flex gap-5 mt-5 justify-center cursor-pointer ">
                                <div className=" text-4xl  rounded-md">
                                    <FaGithubSquare />
                                </div>
                                <button className="text-4xl   rounded-md" onClick={() => ""}>
                                    <FcGoogle />
                                </button>

                            </div>
                        </div>
                        <div className=" text-center text-grey-dark mt-2 cursor-pointer">
                            Don&apos;t have an account?

                            <a className="ml-1 no-underline border-b border-blue  text-purple-700 ">
                                SignUp
                            </a>

                        </div>

                    </form>



                </div>
            </div>
        </div >
    )
}


export default Login