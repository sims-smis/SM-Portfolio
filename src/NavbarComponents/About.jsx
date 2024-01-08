import Navbar from '../components/Navbar'
import React from 'react'
// import image from '../images/peng.avif'
import image from '../images/SM_pic.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from 'react'
import Typewriter from "typewriter-effect";
const About = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    // bg-red-800 ,  bg-gray-800 , bg-slate-400
    // font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-cyan-500 to-green-500
    <div className='flex justify-between '>
      <div id='about' className=' p-64 w-2/3 ' >
          <div className='  text-4xl font-semibold text-white ' data-aos="fade-down" data-aos-offset="500" data-aos-duration="500" data-aos-easing="ease-in-sine" >Heya! My Name is <span className='text-4xl font-semibold text-cyan-400 ' >Simran Meena</span></div>
          <div className=' flex'>
            <div className=' text-white mt-10 text-4xl' data-aos="fade-in" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-in-sine">I'm </div>
            <div className='idk mt-10 ml-2 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-cyan-500 to-green-500' data-aos="fade-in" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <Typewriter options={{
                autoStart: true,
                loop: true,
                delay: 30,
                strings: [
                  " a Full Stack Developer",
                  " an AI/ML enthusiast",
                  " a C++ Programmer",
                  " a UI/UX Designer",
                ]
              }} ></Typewriter>
            </div>
          </div>
          <div className=' mt-10 text-2xl text-gray-400 ' data-aos="fade-up" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-in-sine" >Embarking on a Journey to Merge Creativity with Impactful Solutions.</div>
          {/* <div className=' mt-10 text-white text-xl'>I am a sophomore at IIT Delhi, pursuing electrical engineering, and a fervent web development enthusiast. With a commitment to innovation, I thrive on creating seamless digital experiences that merge functionality and aesthetics. My journey involves turning ideas into impactful online solutions, and I am eager to contribute to the dynamic world of web development with creativity and precision.</div> */}
      </div>
      <div className=' mt-32 mr-44'>
        <div className='inline-block p-4 rounded-full bg-gradient-to-r from-green-300 via-cyan-300 to-green-300 shadow-2xl'>
          <img className='rounded-full h-96 w-96 object-cover' src={image} alt='My image'></img>
        </div>
      </div>
    </div>
  )
}

export default About
