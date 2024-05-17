import React from 'react'

function About() {
  return (
    <div className='bg-slate-300  mt-[80px] '>
      <div className='flex justify-center text-5xl font-bold font'>
        <p>VISI<span className='text-red-400'>ON</span></p>
      </div>
      <p className='flex justify-center text-3xl font-bold font mt-5'>History</p>
      <p className='text-xl  [word-spacing:15px] w-[90%] break-all m-[5%]'>Computer Science & Information Technology Department of CUH started the programme Master of Computer Applications in the academic year 2013 after shifting to the permanent campus located in Jant-Pali, Mahendragarh. It was started with an intake of 30 students. The MCA programme was 3-year full-time course consisting of 6 semesters. Now the course duration is turned into 2 years from 2020 as per the latest AICTE guidelines which contain additional Bridge Course which is propitious for those students who belong non-computer background. Now the current sanctioned intake is 50. The curriculum enables mastering the fundamentals of computing and gives an opportunity to gain an in-depth knowledge of a broad range of topics. </p>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'><img src="../public/CCCUH logo white.png" alt="" /></div>
        <div className='w-full md:w-1/2'><p className='text-xl font-semibold flex  md:mt-[200px] '>“To promote informal learning and foster innovation and invention in technology, with a focus on technologies aimed at contributing positively to the environment and to the society”</p></div>
      </div>
    </div>
  )
}

export default About

