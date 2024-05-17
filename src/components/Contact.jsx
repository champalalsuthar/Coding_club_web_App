import React from 'react'
import image from '../../public/cuhccteam.jpg'
import gmailIcon from '../../public/icons8-gmail.svg';
function Contact() {
  const mystyle = {
    backgroundImage: `url(${image}`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    fontSize: '5vw'
  };
  
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '113.5%',
    backgroundColor: 'rgba(100,100,112,0.7)',
  };
  return (
    <>

      <div className='mt-[80px] '>
        <div className=" shadow-lg overflow-hidden hidden md:block">
          <div className="h-1/3-screen md:h-auto" style={mystyle}>
            <div style={overlayStyle}>
              <p className='text-5xl font-bold mt-[120px] md:mt-[100px]  text-center'>CODING CLUB <span className='text-red-500'>TEAM</span></p>
            </div>
          </div>
        </div>
      </div>
      <p className='text-5xl font-bold text-center m-9'>ADVIS<span className=' text-red-500'>OR</span></p>
      <div className='flex justify-center'>
        <div className="card w-[300px] bg-red-100 shadow-xl ">
          <figure><img src="../../public/sunilsir.png " alt="Sh" /></figure>
          <div className="card-body">
            <h2 className="card-title flex justify-center ">Prof Sunil Kumar </h2>
            <p className='flex justify-center text-center'>Advisor (Innovation )</p>
            <div className='flex flex-row justify-evenly pt-5'>
              <button className="btn-circle"
              //  onClick={() => window.open('https://www.linkedin.com/in/user/', '_blank')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 w-7 fill-[#0077b5]">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </button>
              <button className="btn-circle" onClick={() => window.location.href = 'mailto:drsunilk@cuh.ac.in'}>
                <img src={gmailIcon} alt="Gmail Icon" className="h-7 w-7" />
              </button>
              <button className=" btn-circle ">
                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#333]">
                  <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Development team */}
      <div>
        <p className='text-5xl font-bold text-center m-9'>Development <span className='text-red-500'>TEAM</span></p>
      </div>
      <div className='p-4'>
        <div className='lg:flex justify-center gap-4 '>
          <div className="card w-[300px] bg-red-100 shadow-xl m-2 ">
            <figure><img src="../../public/cls.jpg" alt="Sh" /></figure>
            <div className="card-body">
              <h2 className="card-title flex justify-center ">Champa Lal Suthar</h2>
              <h4 className=" flex justify-center ">MCA (2022-2024)</h4>
              <div className='flex flex-row justify-evenly pt-5'>
                <button className="btn-circle" onClick={() => window.open('https://www.linkedin.com/in/champalalsuthar/', '_blank')}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 w-7 fill-[#0077b5]">
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </button>
                <button className="btn-circle" onClick={() => window.location.href = 'mailto:champalaljangid9292@gmail.com'}>
                  <img src={gmailIcon} alt="Gmail Icon" className="h-7 w-7" />
                </button>
                <button className=" btn-circle ">
                  <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#333]">
                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="card w-[300px] bg-red-100 shadow-xl m-2">
            <figure><img src="../../public/pk.jpg" alt="Sh" /></figure>
            <div className="card-body">
              <h2 className="card-title flex justify-center ">Pushpendra Singh </h2>
              <h4 className=" flex justify-center ">MCA(2022-2024)</h4>
              <div className='flex flex-row justify-evenly pt-5'>
                <button className="btn-circle" onClick={() => window.open('https://www.linkedin.com/in/pushpendrasingh001/', '_blank')}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 w-7 fill-[#0077b5]">
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </button>
                <button className="btn-circle" onClick={() => window.location.href = 'mailto:pushpendrasingh001@gmail.com'}>
                  <img src={gmailIcon} alt="Gmail Icon" className="h-7 w-7" />
                </button>
                <button className=" btn-circle ">
                  <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#333]">
                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* <div>
        <p className='text-5xl font-bold text-center m-9'>Team <span className='text-red-500'>Member</span></p>
      </div>
      <div>
        <div className='flex justify-center'>
          
        </div>
      </div> */}
    </>
  )
}

export default Contact
