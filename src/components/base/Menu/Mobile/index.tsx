"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Delete } from "lucide-react";
import { useState } from "react";
import { buttons } from "../data";
import MobileButton from "./MobileButton";
import DesktopButton from "../Desktop/DesktopButton";

const Mobile = () => {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Mail
          className="absolute top-4 right-4 md:hidden text-black cursor-pointer "
        />
      </SheetTrigger>
      <SheetContent className="bg-base-950 border-gray-300 md:hidden  py-5 justify-between items-start">
        <SheetHeader>
          <SheetTitle className="justify-center items-center">Yu-Gi-Oh!</SheetTitle>
        </SheetHeader>
          <div className="flex flex-col items-start gap-5 h-full w-full">
          
          {buttons.map((button) => (
            <DesktopButton
              key={button.id}
              buttonText={button.buttonText}
              Icon={button.Icon}
              path={button.path}
            />
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    // <div>
    // {!nav ? (
    //   <Mail
    //     onClick={handleNavState}
    //     className="absolute top-4 left-4 z-[99] md:hidden text-black"
    //   />
    // ) : (
    //   <Delete
    //     onClick={handleNavState}
    //     className="absolute top-4 right-4 z-[99] md:hidden text-black"
    //   />
    // )}
    //   {nav ? (
    //     <div className="fixed w-full h-screen  bg-white/5 flex flex-col justify-center items-center z-[20] gap-6" style={{ backdropFilter: 'blur(10px)' }}>
    //      {buttons.map((button) => (
    //         <MobileButton
    //           key={button.id}
    //           buttonText={button.buttonText}
    //           Icon={button.Icon}
    //           path={button.path}
    //           setNav={setNav}
    //         />
    //       ))}
    //     </div>
    //   ) : (
    //     ""
    //   )}
    // </div>
  );
};
export default Mobile;
