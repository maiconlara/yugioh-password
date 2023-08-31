"use client";

import { Mail, Delete } from "lucide-react";
import { useState } from "react";

const Mobile = () => {
  const [nav, setNav] = useState(false);

  const handleNavState = () => {
    setNav(!nav);
  };
  return (
    <div>
      {!nav ? (
        <Mail
          onClick={handleNavState}
          className="absolute top-4 left-4 z-[99] md:hidden text-black"
        />
      ) : (
        <Delete
          onClick={handleNavState}
          className="absolute top-4 right-4 z-[99] md:hidden text-black"
        />
      )}
      {nav ? (
        <div className="fixed w-full h-screen bg-white/40 flex flex-col justify-center items-center z-[20] gap-6">
          <a
            onClick={handleNavState}
            href="#main"
            className="w-[70vw] h-[6vh] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <Mail size={20} />
            <span className="pl-4"></span>
          </a>
          <a
            onClick={handleNavState}
            href="#work"
            className="w-[70vw] h-[6vh] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <Mail size={18} />
            <span className="pl-4"></span>
          </a>
          <a
            onClick={handleNavState}
            href="#projects"
            className="w-[70vw] h-[6vh] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <Mail size={20} />
            <span className="pl-4"></span>
          </a>
          <a
            onClick={handleNavState}
            href="#main"
            className="w-[70vw] h-[6vh] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <Mail size={20} />
            <span className="pl-4"></span>
          </a>
          <a
            onClick={handleNavState}
            href="#contact"
            className="w-[70vw] h-[6vh] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <Mail size={20} />
            <span className="pl-4"></span>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Mobile;
