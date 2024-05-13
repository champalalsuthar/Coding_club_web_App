import React, { useEffect, useState } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div
          className={`navbar bg-slate-400 fixed top-0 left-0 right-0 z-50 ${sticky
            ? "sticky-navbar shadow-md bg-slate-600 duration-300 translate-all ease-in-out"
            : ""
            }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-serif text-l font-semibold "
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Gallery">Gallery</a>
                </li>
                <li>
                  <a href="/Achievement">Achievement</a>
                </li>
                <li>
                  <a href="/About">About us</a>
                </li>
                <li>
                  <a href="/Contact">Contact us</a>
                </li>
              </ul>
            </div>
            <img src="../../public/CCC.png" className="w-[4rem] h-[4rem]" />
            <img src="../../public/cuhlogo.png" className="w-[4rem] h-[4rem]" />
            <a className=" text-2xl font-bold font-serif md: text-center">
              CUH Coding Club
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-serif text-l font-semibold">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Gallery">Gallery</a>
              </li>

              <li>
                <a href="/Achievement">Achievement</a>
              </li>
              <li>
                <a href="/About">About us</a>
              </li>
              <li>
                <a href="/Contact">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a href="https://cuhcodingclub.vercel.app/" className="btn">Get Started</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
