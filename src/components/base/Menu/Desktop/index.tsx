"use client";

import { Separator } from "@radix-ui/react-separator";
import DesktopButton from "./DesktopButton";
import { buttons } from "../data";

const Desktop = () => {
  return (
    <div className="hidden md:flex flex-col  w-full  py-5 justify-between items-start h-screen bg-base-950 border-r-[1px] border-gray-300/40">
      <div className="flex flex-col w-full items-center  gap-6">
        <h1>Yu-Gi-Oh!</h1>
        <Separator className="bg-gray-300/40" />
        <div className="flex flex-col items-start  h-full w-full">
          {buttons.map((button) => (
            <DesktopButton
              key={button.id}
              buttonText={button.buttonText}
              Icon={button.Icon}
              path={button.path}
            />
          ))}
        </div>
      </div>
      <h1>Meu Footer maneiro!</h1>
    </div>
  );
};
export default Desktop;
