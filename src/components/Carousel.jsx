import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gmailIcon from '../../public/icons8-gmail.svg';
function App() {
  const data = [
    {
      name: 'Champa Lal Suthar',
      img: '../../public/menmbers/clsuthar.jpg',
      review: 'MCA (2022-2024) .'

    },
    {
      name: 'pushpendra singh',
      img: '../../public/menmbers/pushpendra.png',
      review: 'MCA (2022-2024) .'
    },
    {
      name: 'M. Rahul',
      img: '../../public/menmbers/rahul.png',
      review: 'MCA (2022-2024) .'
    },
    {
      name: 'Mayank Singh',
      img: '../../public/menmbers/mayanksingh.png',
      review: 'MCA (2021-2023) .'
    },
    {
      name: 'Bharat Negi',
      img: '../../public/menmbers/bharat.png',
      review: 'MCA (2022-2024) .'
    },
    {
      name: 'Deepak Kumar',
      img: '../../public/menmbers/deepak.png',
      review: 'MCA (2021-2023) .'
    }
  ]
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,

  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  return (<>
    <div className='mt-6 w-[96%] m-[2%] items-center '>
      <Slider {...settings}>

        {data.map((s) => (
          <div className='bg-red-100 h-[400px] text-black rounded-xl'>
            <div className=' h-56 rounded-t-xl bg-slate-300 flex justify-center items-center '>
              <img src={s.img} className='rounded-full h-44 w-44' />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-1'>
              <p className='text-xl font-semibold'>{s.name}</p>
              <p className=" text-center">{s.review}</p>
              <div className='flex flex-row justify-center gap-6'>
                <button className="btn-circle"
                // onClick={() => window.open('https://www.linkedin.com/', '_blank')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 w-7 fill-[#0077b5]">
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </button>
                <button className="btn-circle" onClick={() => window.location.href = 'mailto:drsunilk@cuh.ac.in'}>
                  <img src={gmailIcon} alt="Gmail Icon" className="h-7 w-7" />
                </button>
                {/* <button className=" btn-circle ">
                  <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#333]">
                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </span>
                  </span>
                </button> */}
              </div>
            </div>
          </div>
        ))}

      </Slider>
    </div>
  </>)

}

export default App
