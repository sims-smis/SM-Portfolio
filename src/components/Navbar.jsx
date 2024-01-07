import React from 'react';
import { useState } from 'react';
import { HashLink as Links } from 'react-router-hash-link';
// import logoimage from '../images/smLogo.png'
import logoimage from '../images/smLogo3.webp'

const Navbar = () => {

  const [fix, setFix] = useState(true);

  return (
    <div className={`text-white p-4 flex justify-between items-center px-20 ${fix ? 'fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-950 to-black' : ''}`}>
          <div className=' text-white text-lg'>
          <img className=' ml-10 h-10 w-16' src={logoimage} ></img>
          </div>
          <nav>
            <ul className='flex justify-end space-x-10 px-20 '>
                <li>
                  <Links className=' text-white text-lg hover:underline' smooth to='/#about'>About Me</Links>
                </li>
                <li>
                  <Links className=' text-white text-lg hover:underline' smooth to='/#techstack'>Tech Stack</Links>
                </li>
                <li>
                  <Links className=' text-white text-lg hover:underline' smooth to='/#projects'>Projects</Links>
                </li>
                <li>
                  <Links className=' text-white text-lg hover:underline' smooth to='/#contact'>Contact Me</Links>
                </li>
            </ul>
          </nav>
          </div>
  );
};

export default Navbar;
