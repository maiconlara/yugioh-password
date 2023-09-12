"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import { buttons } from "../data";
import MobileButton from "./MobileButton";
import Image from "next/image";
import logo from "../../../../assets/logo.webp";
const Mobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="absolute top-4 right-4 md:hidden text-white cursor-pointer " />
      </SheetTrigger>
      <SheetContent className="bg-[#000] border-gray-300 md:hidden ">
        <div className="flex flex-col  w-full  py-5 justify-between items-start h-screen bg-[#000]">
          <div className="flex flex-col w-full items-center  gap-6">
            <Image
              src={logo}
              alt=""
              width={150}
              height={150}
              className="h-auto"
            />
            <div className="w-full px-2 bg-gray-300/40 h-px"></div>
            <div className="flex flex-col items-start justify-between h-full w-full">
              {buttons.map((button) => (
                <MobileButton
                  key={button.id}
                  buttonText={button.buttonText}
                  Icon={button.Icon}
                  path={button.path}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-[120px] w-full">
            <div className="w-full px-2 bg-gray-300/40 h-px"></div>
            <div className="flex flex-col items-center justify-center pt-4">
              <p className="text-sm font-regular">Bem vindo à Yu-Gi-Oh! Password</p>
              <p className="text-xs pt-2 font-regular">Feito Com 💙 por Maicon Lara</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default Mobile;
