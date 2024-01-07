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
import { HashLink as Links } from 'react-router-hash-link';

function App() {

  return (
    // bg-pink-300,  bg-slate-500
    <Router>
      <div className=' mt-8'>
        <Navbar />
      </div>
      {/* bg-amber-900 */}
      <div className='mt-16'>
        <div className='mt-10'><About/></div>
        <div className=' mt-10 flex flex-col items-center  mb-10'>
            <div className=' text-white mb-4' >Know more about me</div>
            {/* <button className='px-6 py-3 rounded-md bg-green-300 text-black text-lg' onClick={()=>{swapNow()}}>&#8964;</button> */}
           <Links className=' px-6 py-3 rounded-md bg-green-300 text-black text-lg ' smooth to='/#projects'>&#8964;</Links>
           
        </div>
        {/* <div className=' bg-green-200 h-96'><Projects/></div>
        <div className=' bg-orange-300 h-96'><TechStack/></div>
        <div className=' bg-cyan-300 h-96'><Contact/></div>
        <div className=' bg-pink-200 h-96'><Footer/></div> */}
      </div>
     </Router>
  );
}

export default App;