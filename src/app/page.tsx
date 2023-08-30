import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex justify-center items-center h-screen bg-base-950">
      <Button variant="outline" className="bg-base-950 border-base-400">
        Hello World!
      </Button>
    </div>
  );
}
