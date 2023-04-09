import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
		<nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<Link to="/" className="font-semibold text-xl tracking-tight">
					Home
				</Link>
			</div>
			<div className="block lg:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div className="text-sm lg:flex-grow">
					<Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
						About
					</Link>
					<Link to="/contact-me" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
						Contact
					</Link>
                    <Link to="/resume" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                        Resume
                    </Link>
                    <Link to="/personal-projects" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                        Personal Projects
                    </Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
