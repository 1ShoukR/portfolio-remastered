import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import './App.css'
import About from './Components/About'
import Resume from './Components/Resume'
import PersonalProjects from './Components/PersonalProjects'
import ContactMe from './Components/ContactMe'
import Navbar from './Components/Navbar'

function App() {

  return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/personal-projects" element={<PersonalProjects />} />
				<Route path="/contact-me" element={<ContactMe />} />
			</Routes>
		</div>
	);
}

export default App
