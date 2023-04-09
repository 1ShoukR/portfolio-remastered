import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About'
import Resume from './Components/Resume'
import PersonalProjects from './Components/PersonalProjects'
import ContactMe from './Components/ContactMe'

function App() {
  const [count, setCount] = useState(0)

  return (
		<div className="App">
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
