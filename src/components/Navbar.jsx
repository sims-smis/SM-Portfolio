import React from 'react';
import { useState } from 'react';
import { HashLink as Links } from 'react-router-hash-link';

const Navbar = () => {

  const [fix, setFix] = useState(true);

  function handleFix(arg){
    setFix(true);
  }

  return (
    <div className={`text-white p-4 flex justify-between items-center px-20 ${fix ? 'fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-950 to-black' : ''}`}>
          <div className=' text-white text-lg'>
          logo
          </div>
          <nav>
            <ul className='flex justify-end space-x-10 px-20 '>
                <li>
                  <Links className=' text-white text-lg' smooth to='/#about'>About Me</Links>
                </li>
                <li>
                  <Links className=' text-white text-lg' smooth to='/#techstack'>Tech Stack</Links>
                </li>
                <li>
                  <Links className=' text-white text-lg' smooth to='/#projects'>Projects</Links>
                </li>
                <li>
                  <Links className=' text-white text-lg' smooth to='/#contact'>Contact Me</Links>
                </li>
            </ul>
          </nav>
          </div>
  );
};

export default Navbar;
