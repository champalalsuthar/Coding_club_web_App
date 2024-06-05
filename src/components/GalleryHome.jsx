import React from "react";
import image1 from "../../public/gallery/1.jpg";
function GalleryHome() {
  return (
    <div>
      <div className="pt-4">
        <div className="flex flex-wrap justify-evenly">
          <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
            <img src={image1} />
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
          <figure className='sm:h-[320px] md:w-[32%] w-[100%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
            <img src="../../public/gallery/5.jpg" />
          </figure>
          <figure className='sm:h-[320px] w-[100%] md:w-[32%] relative mb-[20px] rounded-lg overflow-hidden transform transition duration-500 hover:scale-75 hover:rotate-12'>
            <img src="../../public/gallery/7.jpg" />
            {/* <img src="../../public/cuhccteam.jpg" /> */}
          </figure>

        </div>
      </div>
    </div>

  );
}

export default GalleryHome;
