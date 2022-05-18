import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

const imgUrls = [
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1622008722227/ResNcwZyph.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHN_qxW1hJvjF-Wgg-vdfktGFCORMGN-Gi2KyzvLqK51zHLkGDDkD46fNRHkYYbMGb5E&usqp=CAU',
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1622008722227/ResNcwZyph.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHN_qxW1hJvjF-Wgg-vdfktGFCORMGN-Gi2KyzvLqK51zHLkGDDkD46fNRHkYYbMGb5E&usqp=CAU',
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1622008722227/ResNcwZyph.png',
]

const Card = ({ imgUrl }) => {
  return (
    <Zoom>

      <div className=' backdrop-blur-lg text-purple-900 shadow-md  hover:shadow-xl hover:scale-105 hover:-translate-y-3 transform duration-200 ease-in-out hover max-w-xs flex flex-col items-center justify-center gap-5 bg-gray-100/50  p-3 '>
        <img className='' src={imgUrl} />
        <p className='px-3 font-semibold'>
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on UI components. It is maintained by
          Meta and a community of individual developers and companies.
        </p>

        <a href="/enroll" className='  text-xl text-white px-3 py-1 hover:bg-white bg-purple-600 bg-opacity-50 hover:text-purple-700 transform ease-linear duration-200 font-semibold border-white '>
          Enroll Now
        </a>

      </div>
    </Zoom>
  )
}

function CourseDetails() {
  return (
    <section id="explore" className='min-h-screen bg-no-repeat' style={{ backgroundImage: 'url(images/registration-bg.png)' }}>
      <h1 className='text-center md:text-5xl text-3xl px-5 font-bold text-purple-700'>
        Popular Courses Right Now!
      </h1>

      <div className='flex justify-center flex-wrap items-stretch gap-10 p-10 text-gray-500 '>
        {imgUrls.map(url => (
          <Card key={url} imgUrl={url} />
        ))}
      </div>
    </section>
  )
}

export default CourseDetails
