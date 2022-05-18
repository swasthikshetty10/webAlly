import React from 'react'

function Footer() {
	return (
		<footer className='md:p-20 p-5 flex flex-col md:flex-row just justify-between pt-20 bg-[#0e0824]'>
			<div className=' items-center  md:gap-20 justify-between flex text-gray-200'>
				<div className='flex flex-col '>
					<h2 className='text-xl font-bold mb-4 text-purple-200'>Quick Links</h2>
					<a className=' hover:underline cursor-pointer mb-1' >Explore</a>
					<a className=' hover:underline cursor-pointer mb-1' >Enroll</a>
					<a className=' hover:underline cursor-pointer mb-1' >About Us</a>
				</div>
				<div className='flex flex-col'>
					<h2 className='text-xl font-bold mb-4 text-purple-200'>Contact Us</h2>
					<a className=' hover:underline cursor-pointer mb-1'>Contact</a>
					<a className=' hover:underline cursor-pointer mb-1'>Email</a>
					<a className=' hover:underline cursor-pointer mb-1'>Newsletter</a>
				</div>
				<div className='flex flex-col'>
					<h2 className='text-xl font-bold mb-4 text-purple-200'>Legal Details</h2>
					<a className=' hover:underline cursor-pointer mb-1'>Terms and Conditions</a>
					<a className=' hover:underline cursor-pointer mb-1'>Regulations</a>
					<a className=' hover:underline cursor-pointer mb-1'>Privacy Policy</a>
				</div>
			</div>
			<div className=' py-10 md:py-0 md:self-end text-center md:text-right'>
				<h2 className='font-title  text-purple-300 text-2xl'>Edu Ark Inc.</h2>
				<p className='text-gray-200'>© All Rights Reserved</p>
			</div>
		</footer>
	)
}

export default Footer