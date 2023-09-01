"use client";

import DesktopButton from "./DesktopButton";
import { buttons } from "../data";

const Desktop = () => {
  return (
    <div className="hidden md:flex flex-col  w-full  py-5 justify-between items-start h-screen bg-black border-r-[1px] border-gray-300/40">
      <div className="flex flex-col w-full items-center  gap-6">
        <h1>Yu-Gi-Oh!</h1>
        <div className="w-full bg-gray-300/40 h-px"></div>
      </div>
      <div className="flex flex-col items-start justify-between h-[280px] w-full -mt-16">
        {buttons.map((button) => (
          <DesktopButton
            key={button.id}
            buttonText={button.buttonText}
            Icon={button.Icon}
            path={button.path}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-between h-20 w-full">
        <div className="w-full px-2 bg-gray-300/40 h-px"></div>
        <div className="flex flex-1 items-center justify-center">
          <h1>Meu Footer maneiro!</h1>
        </div>
      </div>
    </div>
  );
};
export default Desktop;
