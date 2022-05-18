import React, { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'
function CourseEnrollment () {
  const [enrolled, setEnrolled] = useState(false)
  const props = {}
  return (
    <div>
      <div className='md:h-[60vh]  w-full bg-gradient-to-tr p-5 flex-col pt-28 md:pt-5 md:flex-row  from-purple-500 to bg-purple-700 flex justify-center items-center gap-20'>
        <div className='max-w-lg'>
          <h1 className=' text-white font-semibold text-5xl'>
            Full React Course 2020
          </h1>
          <p className=' text-white text-lg'>
            {' '}
            Learn Fundamentals, Hooks, Context API, React Router,
            <br />
            Custom Hooks
          </p>
          {enrolled && (
            <p className='text-2xl inline-flex items-center gap-1 font-semibold text-green-500'>
              <AiFillCheckCircle className='' /> <span>Enrolled</span>
            </p>
          )}
        </div>
        <div>
          <div className='scale-110 text-white md:mt-20 max-w-sm p-2 flex flex-col justify-center items-center sticky bg-gray-200/30 backdrop-blur-md'>
            <iframe src='https://www.youtube.com/embed/4UZrsTqkcW4' />
            <p className='text-2xl font-bold mt-5'>Free</p>
            <p className='text-gray-200 text-[12px]'>
              Get access to all videos and resources by enrolling
            </p>
            <button
              onClick={() => {
                setEnrolled(!enrolled)
              }}
              className='px-3 py-1 border-2 border-white  rounded-lg cursor-pointer my-2 hover:bg-white hover:text-purple-600'
            >
              {enrolled ? 'Go to Videos' : 'Enroll Now'}
            </button>
          </div>
        </div>
      </div>
      <div className=' mt-10 md:mt-20  flex justify-center items- p-5 gap-5 flex-wrap'>
        <div>
          <div className='max-w-xl border-2 p-5 border-black/50 h-fit'>
            <h2 className='text-semibold text-black/70 text-xl mb-3'>
              What you'll learn
            </h2>
            <div className='grid  grid-cols-1 md:grid-cols-2  gap-2'>
              <div className='pr-2 flex items-center text-md text-black/70 gap-1 -'>
                <AiFillCheckCircle className='text-purple-600' />
                <span>Create your own react app</span>
              </div>
              <div className='pr-2 flex items-center text-md text-black/70 gap-2 -'>
                <AiFillCheckCircle className='text-purple-600' />
                <span>Build first class frontend</span>
              </div>
              <div className='pr-2 flex items-center text-md text-black/70 gap-2 -'>
                <AiFillCheckCircle className='text-purple-600' />
                <span>work with hooks and context</span>
              </div>
            </div>
          </div>
          <div className='max-w-xl border-2 p-5 mt-5 border-black/50  '>
            <iframe
              className='w-full md:h-[250px]'
              src='https://www.youtube.com/embed/4UZrsTqkcW4'
            />
          </div>
        </div>
        <div className='max-w-lg border-2 p-5 border-black/50 '>
          <h2 className='text-semibold text-black/70 text-xl mb-3'>
            Course Content
          </h2>
          <div className='flex flex-col gap-1'>
            <div className='px-3 cursor-pointer py-2 flex items-center bg-gray-300/50 w-72  text-black/70 gap-1 '>
              <IoMdArrowDropdown className='-rotate-90 text-black' />
              <span>Chapter 1</span>{' '}
            </div>
            <div className='px-3 cursor-pointer py-2 flex items-center bg-gray-300/50 w-72  text-black/70 gap-2 '>
              <IoMdArrowDropdown className='-rotate-90 text-black' />
              <span>Chapter 2</span>{' '}
            </div>
            <div className='px-3 cursor-pointer py-2 flex items-center bg-gray-300/50 w-72  text-black/70 gap-2 '>
              <IoMdArrowDropdown className='-rotate-90 text-black' />
              <span>Chapter 3</span>{' '}
            </div>
          </div>
        </div>
      </div>


      <div className='my-20 bg-gray-100 p-5 md:p-10 md:py-20'>
        <h2 className='font-bold text-center text-3xl text-purple-600'>
          Recommended Courses
        </h2>
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div className='scale-110 text-black mt-10 max-w-sm p-2 flex flex-col justify-center items-center sticky bg-gray-300/50 backdrop-blur-md'>
            <iframe src='https://www.youtube.com/embed/bMknfKXIFA8' />
            <p className='text-2xl font-bold mt-5'>Free</p>
            <p className='text-gray-700 text-[12px]'>
              Get access to all videos and resources by enrolling
            </p>
            <button
              onClick={() => {
                setEnrolled(!enrolled)
              }}
              className='px-3 py-1 border-2 border-purple-600  rounded-lg cursor-pointer my-2 hover:bg-purple hover:bg-purple-600 hover:text-white transition-colors'
            >
              {'Enroll Now'}
            </button>
          </div>
          <div className='scale-110 text-black mt-10 max-w-sm p-2 flex flex-col justify-center items-center sticky bg-gray-300/50 backdrop-blur-md'>
            <iframe src='https://www.youtube.com/embed/w7ejDZ8SWv8' />
            <p className='text-2xl font-bold mt-5'>Free</p>
            <p className='text-gray-700 text-[12px]'>
              Get access to all videos and resources by enrolling
            </p>
            <button
              onClick={() => {
                setEnrolled(!enrolled)
              }}
              className='px-3 py-1 border-2 border-purple-600  rounded-lg cursor-pointer my-2 hover:bg-purple hover:bg-purple-600 hover:text-white transition-colors'
            >
              {'Enroll Now'}
            </button>
          </div>
          <div className='scale-110 text-black mt-10 max-w-sm p-2 flex flex-col justify-center items-center sticky bg-gray-300/50 backdrop-blur-md'>
            <iframe src='https://www.youtube.com/embed/Ke90Tje7VS0' />
            <p className='text-2xl font-bold mt-5'>Free</p>
            <p className='text-gray-700 text-[12px]'>
              Get access to all videos and resources by enrolling
            </p>
            <button
              onClick={() => {
                setEnrolled(!enrolled)
              }}
              className='px-3 py-1 border-2 border-purple-600  rounded-lg cursor-pointer my-2 hover:bg-purple hover:bg-purple-600 hover:text-white transition-colors'
            >
              {'Enroll Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseEnrollment
