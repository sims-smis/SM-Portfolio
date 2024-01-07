import React, { useState, useEffect } from 'react';
import { HashLink as Links } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import logoimage from '../images/smLogo3.webp';

const Navbar = () => {
  const [fix, setFix] = useState(true);
  const location = useLocation(); // Get the current location object

  // Function to determine if the link is active based on the current URL hash
  const isActive = (hash) => {
    return location.hash === hash;
  };

  return (
    <div className={`text-white p-4 flex justify-between items-center px-20 ${fix ? 'fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-950 to-black' : ''}`}>
      <div className='text-white text-lg'>
        <img className='ml-10 h-10 w-16' src={logoimage} alt='Logo' />
      </div>
      <nav>
        <ul className='flex justify-end space-x-10 px-20'>
          <li>
            <Links className={`text-lg hover:underline ${isActive('#about') ? "text-green-300" : "text-white"}`} smooth to='/#about'>About Me</Links>
          </li>
                <li>
                  <Links className={`text-lg hover:underline ${isActive('#techstack') ? "text-green-300" : "text-white"}`} smooth to='/#techstack'>Tech Stack</Links>
                </li>
                <li>
                  <Links className={`text-lg hover:underline ${isActive('#projects') ? "text-green-300" : "text-white"}`} smooth to='/#projects'>Projects</Links>
                </li>
                <li>
                  <Links className={`text-lg hover:underline ${isActive('#contact') ? "text-green-300" : "text-white"}`} smooth to='/#contact'>Contact Me</Links>
                </li>
            </ul>
          </nav>
          </div>
  );
};

export default Navbar;
