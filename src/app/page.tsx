import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex justify-center items-center h-screen bg-gray-300">
      <Button variant="outline" className="bg-blue-400">Hello World!</Button>{" "}
    </div>
  );
}
