import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Menu() {
  return (
    <div className=" flex max-w-[20vw] justify-center items-center h-screen bg-base-950 border-r-[1px] border-gray-300/40">
      <Link href={`/password`}>
        <Button variant="outline" className="bg-[#1F2B3D]">
          Hello World!
        </Button>{" "}
      </Link>
    </div>
  );
}
