import Navbar from '../components/Navbar'
import React from 'react'
import image from '../images/SM_pic.jpeg'
// import image from '../images/peng.avif'
const About = () => {
  return (
    // bg-red-800 ,  bg-gray-800 , bg-slate-400
    <div className='flex justify-between '>
      <div id='about' className=' p-44 w-2/3 ' >
          <div className=' text-white text-4xl font-semibold' >Heya! My Name is Simran</div>
          <div className=' mt-10 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-cyan-500 to-green-300' >Embarking on a Journey to Merge Creativity with Impactful Solutions.</div>
          <div className=' mt-10 text-white text-xl'>I am a sophomore at IIT Delhi, pursuing electrical engineering, and a fervent web development enthusiast. With a commitment to innovation, I thrive on creating seamless digital experiences that merge functionality and aesthetics. My journey involves turning ideas into impactful online solutions, and I am eager to contribute to the dynamic world of web development with creativity and precision.</div>
      </div>
      <div className=' mt-32 mr-44'>
        <div className='className=inline-block p-4 rounded-full bg-gradient-to-r from-green-300 via-cyan-300 to-green-300'>
          <img className='rounded-full h-96 w-96 object-cover' src={image} alt='My image'></img>
        </div>
      </div>
    </div>
  )
}

export default About
