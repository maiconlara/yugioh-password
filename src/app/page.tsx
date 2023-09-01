import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex justify-center items-center h-screen bg-[#111111]">
      <Button variant="outline" className="bg-[#09090B] border-base-400">
        Hello World!
      </Button>
    </div>
  );
}
