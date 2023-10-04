import React from 'react';
import MyPic from '../assets/me.jpg';
import '../css/homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
			<>
				<div className="container mx-auto p-6 min-h-screen flex flex-col justify-center">
					<div className="text-center mb-6">
						<div className="text-4xl font-bold mb-1">Hi, I'm Rahmin Shoukoohi.</div>
						<div className="text-xl">I'm a Software Engineer that welcomes challenges and architects solutions.</div>
					</div>
					<div className="flex flex-col md:flex-row p-6 rounded-xl max-w-3xl md:max-w-5xl mx-auto mt-6">
						<div className="flex flex-col bg-white rounded-xl items-center w-full shadow-lg md:w-1/2 mb-6 md:mb-0 pb-4 ">
							<div className="w-full mb-4 ">
								{/* Added padding here */}
								<img className="rounded-t-lg object-cover w-full h-auto max-h-[400px]" src={MyPic} alt="me" /> {/* Adjusted height classes here */}
							</div>
							<div className="flex flex-col items-center w-full">
								{' '}
								{/* Updated this line */}
								<div className="font-bold mb-2">Rahmin Shoukoohi</div>
								<div className="italic mb-4">rahminshoukoohi@gmail.com</div>
								<div className="flex">
									<a href="https://www.linkedin.com/in/your-profile/" className="text-blue-500 hover:underline">
										<FontAwesomeIcon icon={faLinkedin} size='lg'/>
									</a>
									<a href="https://github.com/1ShoukR" className="ml-4 text-blue-500 hover:underline">
										<FontAwesomeIcon icon={faGithub} size="lg" />
									</a>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 p-4 md:p-1 md:pl-6">
							<h1 className="text-xl font-bold mb-4">A little about me</h1>
							<div className="text-left font-medium">
								Hello! I'm Rahmin, a Software Engineer based in <span className="text-[#3f51b5]/100 text-bold"> Atlanta, GA </span> who's experienced in taking fullstack applications from scratch to
								production.
							</div>
							<div className="text-left pt-4 font-medium">
								I am a <span className="text-[#3f51b5]/100 text-bold"> Georgia State University Alumni </span> with a Bachelors degree in Biology, and I am currently working at Two Fish Creative Inc.
							</div>
							<div className="text-left pt-4 font-medium">
								Throughout my life, I've always had a knack for technology. I am now blessed with the opportunity to develop and engineer awesome software for people to use and my amazing company. My
								work includes developing mobile apps, making web apps, creating backend servers, and implementing desktop apps.
							</div>
						</div>
					</div>
					{/* <nav className="mt-6 text-center">
                    <Link to="/about" className="text-xl mr-4 text-blue-500 hover:text-blue-700">
                        About
                    </Link>
                    <Link to="/resume" className="text-xl mr-4 text-blue-500 hover:text-blue-700">
                        Resume
                    </Link>
                    <Link to="/personal-projects" className="text-xl mr-4 text-blue-500 hover:text-blue-700">
                        Personal Projects
                    </Link>
                    <Link to="/contact-me" className="text-xl text-blue-500 hover:text-blue-700">
                        Contact
                    </Link>
                </nav> */}
				</div>
			</>
		);
};

export default Home;
