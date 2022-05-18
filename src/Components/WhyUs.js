import React from 'react'
import { FiKey, FiHeadphones, FiBookOpen, FiAward, FiUsers } from 'react-icons/fi'

const Card = ({title, icon}) => {
	return (
		<div className='group transition-all duration-300 hover:scale-105 text-center grow flex flex-col items-center max-w-sm py-7 px-5 min-h-[250px] bg-gray-200'>
		{icon}
		<h2 className='font-title text-2xl font-bold mb-5'>{title}</h2>
		<p>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.</p>
	</div>
	)
}

function WhyUs() {
	return (
		<section className='min-h-screen my-10 md:my-0 md:mb-10'>
			<h1 className='text-center text-3xl md:text-5xl  font-bold text-purple-700'>
								 Why Edu Ark?
							</h1>
			<div className=' flex justify-center gap-10 p-10 flex-wrap'>
				<Card icon={<FiKey className='transition-all duration-500 group-hover:rotate-[360deg] text-3xl mb-4 mt-2'/>} title={"Lifetime Access"}/>
				<Card icon={<FiUsers className='transition-all duration-500 group-hover:rotate-[360deg] text-3xl mb-4 mt-2' />} title={"Expert Mentors"}/>
				<Card icon={<FiAward className='transition-all duration-500 group-hover:rotate-[360deg] text-3xl mb-4 mt-2' />} title={"Industry Recognized Certificates"}/>
				<Card icon={<FiHeadphones className='transition-all duration-500 group-hover:rotate-[360deg] text-3xl mb-4 mt-2'/>} title={"24/7 Support"}/>
				<Card icon={<FiBookOpen className='transition-all duration-500 group-hover:rotate-[360deg] text-3xl mb-4 mt-2'/>} title={"2000+ Courses"}/>
			</div>
		</section>
	)
}

export default WhyUs