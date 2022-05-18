import React from 'react'

function CourseDetails() {
    return (
        <section className='h-screen '>
            <h1 className='text-center text-5xl  font-bold text-purple-700'>
                Enroll Now
            </h1 >

            <div className='flex justify-center flex-wrap items-center gap-10 p-10 text-gray-500 '>
                <div className='shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transform duration-300 ease-in-out hover max-w-xs flex flex-col items-center justify-center gap-5 bg-gray-300/50  p-3 rounded-xl'>
                    <img className='' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1622008722227/ResNcwZyph.png" />
                    <p className='font-semibold'>
                        React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
                    </p>
                    <button className='rounded-lg border-2 text-xl text-purple-600 px-3 py-1 hover:bg-purple-600 hover:text-white transform ease-linear duration-200 font-semibold border-purple-600 '>Enroll Now</button>

                </div>
                <div className='shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transform duration-300 ease-in-out hover max-w-xs flex flex-col items-center justify-center gap-5 bg-gray-300/50  p-3 rounded-xl'>
                    <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHN_qxW1hJvjF-Wgg-vdfktGFCORMGN-Gi2KyzvLqK51zHLkGDDkD46fNRHkYYbMGb5E&usqp=CAU" />
                    <p className='font-semibold'>
                        React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
                    </p>
                    <button className='rounded-lg border-2 text-xl text-purple-600 px-3 py-1 hover:bg-purple-600 hover:text-white transform ease-linear duration-200 font-semibold border-purple-600 '>Enroll Now</button>

                </div>
                <div className='shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transform duration-300 ease-in-out hover max-w-xs flex flex-col items-center justify-center gap-5 bg-gray-300/50  p-3 rounded-xl'>
                    <img className='' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1622008722227/ResNcwZyph.png" />
                    <p className='font-semibold'>
                        React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
                    </p>
                    <button className='rounded-lg border-2 text-xl text-purple-600 px-3 py-1 hover:bg-purple-600 hover:text-white transform ease-linear duration-200 font-semibold border-purple-600 '>Enroll Now</button>

                </div>


            </div>
        </section >
    )
}

export default CourseDetails