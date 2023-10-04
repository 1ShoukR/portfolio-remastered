import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleHamburgerClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-gray-800 p-4">
            <div className="mx-auto">
                <div className="flex justify-between">
                    <div>
                        <Link to="/" className="text-2xl font-bold text-white">Home</Link>
                    </div>
                    <div className="block lg:hidden">
                        <button onClick={handleHamburgerClick} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <div className={`lg:flex items-center ${isOpen ? 'flex' : 'hidden'}`}>
                        <Link to="/about" className="text-white lg:mx-4 my-2 lg:my-0 hover:text-gray-300">About</Link>
                        <Link to="/resume" className="text-white lg:mx-4 my-2 lg:my-0 hover:text-gray-300">Resume</Link>
                        <Link to="/personal-projects" className="text-white lg:mx-4 my-2 lg:my-0 hover:text-gray-300">Personal Projects</Link>
                        <Link to="/contact-me" className="text-white lg:mx-4 my-2 lg:my-0 hover:text-gray-300">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

