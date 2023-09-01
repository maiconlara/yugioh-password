"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify} from "lucide-react";
import { buttons } from "../data";
import DesktopButton from "../Desktop/DesktopButton";

const Mobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="absolute top-4 right-4 md:hidden text-white cursor-pointer " />
      </SheetTrigger>
      <SheetContent className="bg-base-950 border-gray-300 md:hidden ">
        <div className="flex flex-col  w-full  py-5 justify-between items-start h-screen bg-base-950">
          <div className="flex flex-col w-full items-center  gap-6">
            <h1>Yu-Gi-Oh!</h1>
            <div className="w-full px-2 bg-gray-300/40 h-px"></div>
            <div className="flex flex-col items-start justify-between h-full w-full">
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
          <div className="flex flex-col items-center justify-between h-20 w-full">
            <div className="w-full px-2 bg-gray-300/40 h-px"></div>
            <div className="flex flex-1 items-center justify-center">
              <h1>Meu Footer maneiro!</h1>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default Mobile;
