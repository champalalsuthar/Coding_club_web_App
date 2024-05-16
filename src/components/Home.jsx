
import Carousel from './Carousel'
import React from 'react'
import GalleryHome from './GalleryHome'
import { useNavigate } from 'react-router-dom'




function Home() {
  const navigate = useNavigate();
  return (
    <>

      <div className=' bg-slate-400 md:px-20 px-4 flex flex-col md:flex-row my-10 mt-[80px]'>
        <div className='w-full md:w-1/2 '>
          <div className=' mt-[80px]
   md:mt-[150px]'>
            <img src="../../public/CUH-Coding-Club-5-8-2024(5).png" alt="" />
          </div>

        </div>
        <div className=" ml-8 mt-[-40px] w-full md:mt-0 md:ml-20 md:w-1/2">
          <img
            src="../../public/CCC.png"
          />
          <p className='flex  text-center font-bold text-white mt-[-50px] ml-[60px]
            m-4 md:ml-[110px]'>Coding Club <br /> Create Somthing Next</p>
        </div>

      </div>


      <p className='w-[96%] bg-blue-100 shadow-lg text-center font-bold text-3xl border-[2px] border-black border-shadow ml-[2%] mr-[2%]'>About Us</p>

      <div className='max-w-screen-2xl p-8 flex justify-between gap-6 flex-col md:flex-row '>
        <div className=' md:w-[600px] md:h-[400px] w-full h-[400px] justify-center bg-slate-400 shadow-lg'>


          <div className="flex justify-center items-center text-center md:mt-[22%] md:mr-5 md:ml-5 mt-12 mr-4 ml-4 mb-12">


            <p className='text-balance break-all px-8'>  cuh coding club is a group of students working together with patience and enthusiasm to create something Ctrl + N. Anyone who is passionate about exploring the technologies or want to learn something new can join the club. We believe that learning together is fun. Along with academic knowledge, various skills are there, a student should have. We are here for you to introduce all those things and build your personality full with require skills. </p>

          </div>
        </div>
        <div className=' md:w-[600px] md:h-[400px] w-full h-[400px] justify-center bg-slate-400 shadow-lg'>
          <div className='md:ml-[100px] '>
            <img className=' h-[25rem] w-[35rem] ' src="../../public/CCC.png" />
          </div>
        </div>
      </div>
      <p className='w-[96%] bg-blue-100 shadow-lg text-center font-bold text-3xl border-[2px] border-black border-shadow ml-[2%] mr-[2%]'>Events</p>

      <div className='max-w-screen-2xl p-8 flex justify-between gap-6 flex-col md:flex-row '>
        <div className='w-full md:w-[600px] md:h-[600px]  h-[600px] justify-center bg-slate-400 shadow-lg'>


          <div className="flex justify-center items-center text-center md:mt-[22%] md:mr-5 md:ml-5 mt-12 mr-4 ml-4 mb-12">


            <p className='text-balance break-all p-8'>  cuh coding club  is a group of students working together with patience and enthusiasm to create something Ctrl + N. Anyone who is passionate about exploring the technologies or want to learn something new can join the club. We believe that learning together is fun. Along with academic knowledge, various skills are there, a student should have. We are here for you to introduce all those things and build your personality full with require skills. </p>

          </div>
        </div>
        <div className=' md:w-[600px] md:h-[600px] w-full h-[600px] justify-center bg-slate-400 shadow-lg'>
          <div className='md:ml-[100px] '>
            <img className=' h-[25rem] w-[35rem] ' src="../../public/CCC.png" />
          </div>
        </div>
      </div>
      <p className='w-[96%] bg-blue-100 shadow-lg text-center font-bold text-3xl border-[2px] border-black border-shadow ml-[2%] mr-[2%]'>Members</p>
      <div>
        <Carousel />
      </div>
      <div>
        <p className=' mt-8 w-[96%] bg-blue-100 shadow-lg text-center font-bold text-3xl border-[2px] border-black border-shadow ml-[2%] mr-[2%]'>Glimpse Of Gallery</p>
      </div>
      <div className='m-6 '>
        <GalleryHome />
      </div>
      <div className='flex justify-center m-3'>

        <button className=" border-blue-400 border-[4px] rounded-lg px-3 py-2 bg-blue-700 hover:scale-105 text-white text-lg font font-semibold"
          // onClick={() => navigate('/gallery#')} 
          onClick={() => {
            navigate('/gallery');
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 100);
          }}
        >
          View More</button>
      </div>
    </>
  )
}

export default Home
