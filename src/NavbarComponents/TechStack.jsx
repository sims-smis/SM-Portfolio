import Navbar from '../components/Navbar'

import React from 'react'

const TechStack = () => {
  return (
    <div id='techstack' className=' pt-20' >
      <div className=' text-white font-semibold  flex w-full justify-center text-6xl' >My <span className=' pl-2 text-cyan-400'>Tech Stack</span></div>
      {/* MY SKILLS */}
      <div className=' mt-20 flex justify-between '>
        <div className='w-1/2' data-aos="fade-right" data-aos-duration="300" >

          <div className=' flex justify-center text-4xl text-white font-semibold mb-10'>Technical Skills</div>
          <div className=" relative pl-16 flex items-center w-4/6 mb-10">
            <div className="w-14 h-14 bg-amber-200">Image</div>
            <div className=" flex-1 ml-10">
              <div className="text-gray-100 font-semibold ">HTML & CSS</div>
              <div className="bg-gray-200 w-full h-2 rounded">
                <div className=" bg-cyan-400 h-2 rounded" style={{ width: '85%' }}></div>
                <div className="absolute top-0 right-0 mt-[1.25rem] mr-[-2.5rem] text-white text-sm">85%</div>
              </div>
            </div>
        </div>

          <div className="relative pl-16 flex items-center w-4/6 mb-10">
            <div className="w-14 h-14 bg-amber-200">Image</div>
            <div className="flex-1 ml-10">
              <div className="text-gray-100 font-semibold ">Javascript</div>
              <div className="bg-gray-200 w-full h-2 rounded">
                <div className=" bg-cyan-400 h-2 rounded" style={{ width: '60%' }}></div>
                <div className="absolute top-0 right-0 mt-[1.25rem] mr-[-2.5rem] text-white text-sm">60%</div>
              </div>
            </div>
        </div>

        
          <div className="relative pl-16 flex items-center w-4/6 mb-10">
            <div className="w-14 h-14 bg-amber-200">Image</div>
            <div className="flex-1 ml-10">
              <div className="text-gray-100 font-semibold ">React</div>
              <div className="bg-gray-200 w-full h-2 rounded">
                <div className=" bg-cyan-400 h-2 rounded" style={{ width: '55%' }}></div>
                <div className="absolute top-0 right-0 mt-[1.25rem] mr-[-2.5rem] text-white text-sm">55%</div>
              </div>
            </div>
        </div>

        
          <div className="relative pl-16 flex items-center w-4/6 mb-10">
            <div className="w-14 h-14 bg-amber-200">Image</div>
            <div className="flex-1 ml-10">
              <div className="text-gray-100 font-semibold ">Backend Development</div>
              <div className="bg-gray-200 w-full h-2 rounded">
                <div className=" bg-cyan-400 h-2 rounded" style={{ width: '45%' }}></div>
                <div className="absolute top-0 right-0 mt-[1.25rem] mr-[-2.5rem] text-white text-sm">45%</div>
              </div>
            </div>
        </div>

        <div className="relative pl-16 flex items-center w-4/6 mb-10">
            <div className="w-14 h-14 bg-amber-200 ">Img</div>
            <div className="flex-1 ml-10">
              <div className="text-gray-100 font-semibold ">C++</div>
              <div className="bg-gray-200 w-full h-2 rounded">
                <div className=" bg-cyan-400 h-2 rounded" style={{ width: '85%' }}></div>
                <div className="absolute top-0 right-0 mt-[1.25rem] mr-[-2.5rem] text-white text-sm">85%</div>
              </div>
            </div>
        </div>

        <div className="relative pl-16 flex items-center w-4/6 mb-10">
            <div className="w-14 h-14 bg-amber-200">Image</div>
            <div className="flex-1 ml-10">
              <div className="text-gray-100 font-semibold ">Python</div>
              <div className="bg-gray-200 w-full h-2 rounded">
                <div className=" bg-cyan-400 h-2 rounded" style={{ width: '60%' }}>
                </div>
                <div className="absolute top-0 right-0 mt-[1.25rem] mr-[-2.5rem] text-white text-sm">60%</div>
              </div>
            </div>
        </div>

        {/* <div className="relative flex items-center">
  <div className="w-16">Image</div>
  <div className="flex-1 ml-4">
    <div className="text-gray-700">HTML & CSS</div>
    <div className="relative bg-gray-200 w-full h-4 rounded">
      <div className="bg-blue-600 h-4 rounded" style={{ width: '85%' }}>
        <div className="absolute right-0 mr-[-0.5rem] w-2 h-2 bg-black rounded-full"></div>
      </div>
      <div className="absolute top-0 right-0 mt-[1.25rem] mr-[-0.5rem] text-black text-sm">85%</div>
    </div>
  </div>
</div> */}



        </div>
        <div className=' bg-indigo-400 w-1/2'>
          Professional Skills
        </div>
      </div>
    </div>
  )
}

export default TechStack
