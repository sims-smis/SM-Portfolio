// import React from 'react'
// import Navbar from './components/Navbar'
// import IntroPage from './components/IntroPage'
// import TechStack from './components/TechStack'
// import Projects from './components/Projects'
// import PhoneEmail from './components/PhoneEmail'
// import Footer from './components/Footer'


console.log("hi 2")
import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router , Routes, Route } from 'react-router-dom';
import Contact from './NavbarComponents/Contact';
import About from './NavbarComponents/About';
import TechStack from './NavbarComponents/TechStack';
import Projects from './NavbarComponents/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className=' mt-8'>
        <Navbar />
      </div>
      <div className='mt-16'>
        <div className=' bg-blue-300 h-96'><About/></div>
        <div className=' bg-green-200 h-96'><Projects/></div>
        <div className=' bg-orange-300 h-96'><TechStack/></div>
        <div className=' bg-cyan-300 h-96'><Contact/></div>
        <div className=' bg-pink-200 h-96'><Footer/></div>
      </div>
     </Router>
  );
}

export default App;