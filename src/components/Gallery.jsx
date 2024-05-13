import React from "react";


// import MultirowCrousal from './MultirowCrousal'

function Gallery() {
  return (
    <div>
      <div className="mt-[120px]">
        <div>
          <p className='w-[96%] bg-blue-100 shadow-lg text-center font-bold text-3xl border-[2px] border-black border-shadow ml-[2%] mr-[2%]'>Events Gallery</p>
        </div>

        <div>
          <div className="sm:h-full m-[5px] p-[5px]">
            <div className="h-full m-auto p-[20px] max-w-[1200px]">
              <div className='flex flex-wrap justify-evenly'>

                <figure className='sm:h-[320px] md:w-[32%]  w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../public/image2.jpeg" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../public/image2.jpeg" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../public/image2.jpeg" />
                </figure>

                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../public/image2.jpeg" />
                </figure>
                <figure className='sm:h-[320px]  md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../public/image2.jpeg" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../public/image2.jpeg" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../public/image2.jpeg" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../public/image2.jpeg" />
                </figure>
                <figure className='sm:h-[320px] w-[100%] md:w-[32%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../public/image2.jpeg" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
