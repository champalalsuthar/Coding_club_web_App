import React from "react";
import image1 from "../../public/gallery/1.jpg";

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
                  <img src={image1} alt="Description of image" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/2.jpg" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/3.jpg" />
                </figure>

                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/8.jpg" />
                </figure>
                <figure className='sm:h-[320px]  md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/5.jpg" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/7.jpg" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/4.jpg" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/9.jpg" />
                </figure>
                <figure className='sm:h-[320px] w-[100%] md:w-[32%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/11.jpg" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/12.jpg" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/13.jpg" />
                </figure>
                <figure className='sm:h-[320px] w-[100%] md:w-[32%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/14.jpg" />
                </figure>
                <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/15.jpg" />
                </figure>
                {/* <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/16.jpg" />
                </figure>
                <figure className='sm:h-[320px] w-[100%] md:w-[32%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
                  <img src="../../public/gallery/1.jpg" />
                </figure> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
