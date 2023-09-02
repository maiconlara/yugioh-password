"use client";

import DesktopButton from "./DesktopButton";
import { buttons } from "../data";
import logo from "../../../../assets/logo.webp";
import Image from "next/image";
import { useState } from "react";

const Desktop = () => {
  const [selectedPath, setSelectedPath] = useState<string>("Home");

  return (
    <div className="hidden md:flex flex-col  w-full  py-5 justify-between items-start h-screen bg-black border-r-[1px] border-gray-300/40">
      <div className="flex flex-col w-full items-center  gap-6">
        <Image src={logo} alt="" width={200} height={200} />
        <div className="w-full bg-gray-300/40 h-px"></div>
      </div>
      <div className="flex flex-col items-start justify-between h-[280px] w-full -mt-16">
        {buttons.map((button) => (
          <DesktopButton
            key={button.id}
            buttonText={button.buttonText}
            Icon={button.Icon}
            path={button.path}
            setSelectedPath={setSelectedPath}
            selectedPath={selectedPath}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-between h-20 w-full">
        <div className="w-full px-2 bg-gray-300/40 h-px"></div>
        <div className="flex flex-col items-center justify-center">
          <h1>Bem vindo à Yu-Gi-Oh! Password</h1>
          <p className="text-xs pt-4">Feito Com 💙 por Maicon Lara</p>
        </div>
      </div>
    </div>
  );
};
export default Desktop;
