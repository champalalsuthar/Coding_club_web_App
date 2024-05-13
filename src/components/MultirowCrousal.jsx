import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MultipleRows() {
  const data = [
    {
      img: '../public/profile.png',
    }, {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    }, {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    }, {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
    {
      img: '../public/profile.png',
    },
  ]

  var settings = {


    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    rows: 2,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
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
  return (<>
    <div className='mt-[150px] w-[80%] m-[10%] items-center '>
      <Slider {...settings}>

        {data.map((s) => (
          <div className='bg-red-100 h-[200px] text-black rounded-xl'>
            <div className=' h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center '>
              <img src={s.img} className='rounded-full h-44 w-44' />
            </div>

          </div>


        ))}

      </Slider>
    </div>
  </>)

}

export default MultipleRows
