import React from 'react';
import MyPic from '../assets/me.jpg';

type Props = {};

const Description = (props: Props) => {
	return (
		<div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl md:max-w-5xl mx-auto mt-6">
			<div className="flex flex-col items-center w-full md:w-1/2 mb-6 md:mb-0">
				<div className="w-3/4 md:w-full mb-4">
					<img className="rounded-lg object-cover w-full" src={MyPic} alt="me" />
				</div>
				<div className="text-center md:text-left">
					<a href="https://www.linkedin.com/in/your-profile/" className="text-blue-500 hover:underline">
						LinkedIn
					</a>
					{/* Add more links or text here */}
				</div>
			</div>
			<div className="w-full md:w-1/2 p-4 md:p-0 md:pl-6">
				<h2 className="text-xl font-bold mb-2">A little about me</h2>
				<div className="bg-white p-6 rounded-lg shadow-lg">
					<p className="mb-4">
						I am incredibly passionate about all things tech! I have attended and graduated the DigitalCrafts Web Development Bootcamp to learn Full-Stack Web Development in order to jumpstart my
						career in tech, and it is the best decision I have ever made in my life. My love for coding continues to grow exponentially as I learn more and more about the intricacies and nuances of
						each language that I pursue!
					</p>
					<div className="flex space-x-4 mt-4">
						<a href="/Resume" className="btn btn-outline">
							Resume
						</a>
						<a href="/Contact_Me" className="btn btn-outline">
							Contact Me
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Description;
