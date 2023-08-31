"use client";

import { Mail, Delete } from "lucide-react";
import { useState } from "react";
import { buttons } from "../data";
import MobileButton from "./MobileButton";

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
         {buttons.map((button) => (
            <MobileButton
              key={button.id}
              buttonText={button.buttonText}
              Icon={button.Icon}
              path={button.path}
              setNav={setNav}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Mobile;
