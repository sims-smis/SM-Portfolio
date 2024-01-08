import React from 'react'

const AboutMe = () => {
  return (
    <div id='aboutMe' className=' p-28'>
        <div className='  font-bold flex justify-center items-center text-6xl text-white' data-aos="fade-down" data-aos-duration="300" >About <span className=' text-cyan-400 pl-3'>Me</span></div>
        <div className=' pt-4 text-white text-2xl  max-w-5xl mx-auto ' data-aos="fade-down" data-aos-duration="300" >I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML CSS, and JavaScript, as well as design software such as Adobe Photostop and Illustrator.</div>
        <div className=' mt-10 pt-20 flex  justify-between'>
            <div className='w-1/2' data-aos="fade-right" data-aos-offset="500">
                <div className=' w-full flex text-5xl font-bold text-white justify-center'>Education</div>
                <div className=' pt-16 relative border-l-2 border-gray-200'>
                    <div className='mb-4 pl-4 pt-4 '>
                        <div className='absolute -left-3 mt-0.5 bg-white border-2 border-gray-200 rounded-full w-6 h-6'></div>
                        <div className='text-3xl font-semibold text-gray-200'>Indian Institute of Technology, Delhi</div>
                        <div className='text-base text-gray-400'>BTech. in Electrical Engineering | October 2022 - June 2026</div>
                    </div>
                    <div className='mb-4 pl-4 pt-16'>
                        <div className='absolute -left-3 mt-0.5 bg-white border-2 border-gray-200 rounded-full w-6 h-6'></div>
                        <div className='text-3xl font-semibold text-gray-200'>Kendriya Vidyalaya, Ghaziabad</div>
                        <div className=' text-base text-gray-400'>1st-12th grade | March 2010 - March 2022</div>
                    </div>
                </div>       
            </div>
            <div className=' w-1/2 ' data-aos="fade-left" data-aos-offset="500">
                <div className=' flex justify-center text-5xl font-bold text-white' >What I do</div>
                <div className=' mt-16 p-3 h-24  flex space-x-8 rounded-md '>
                    <div className=' bg-orange-300 w-16 ' >Pic</div>
                    <div className=' text-white' > <span className=' text-2xl font-semibold'>Frontend Developer</span>
                        <div className=' font-sans'>I'm a front-end developer with experience in building responsive and optimized sites.</div>
                    </div>
                </div>
                <div className=' mt-10 p-3 h-24  flex space-x-8 rounded-md '>
                    <div className=' bg-blue-300 w-16 ' >Pic</div>
                    <div className=' text-white' ><span className=' text-2xl font-semibold'>Backend Developer </span>
                        <div>I have experience developing fast and optimised back-end systems and APIs.</div>
                    </div>
                </div>
                <div className=' mt-10 p-3 h-24  flex space-x-8 rounded-md '>
                    <div className=' bg-pink-300 w-16 ' >Pic</div>
                    <div className=' text-white' ><span className=' text-2xl font-semibold'>Projects in C++ and Python  </span>
                        <div>I am proficient in C++ and Python and have made many projects using them.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe
