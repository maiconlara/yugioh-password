import Link from "next/link";
import { Mail } from "lucide-react";
export interface ButtonProps {
  id?: number;
  buttonText: string;
  icon: string;
  path: string;
}

const MenuButton = ({ buttonText, icon, path }: ButtonProps) => {
  return (
    <div className="w-full h-12 ">
      <Link href={path}>
        <div className="bg-[#1F2B3D] w-full h-full px-5 flex flex-row items-center rounded-sm hover:bg-base-400 transition-colors">
          <Mail className="mr-2 h-4 w-4" />
          {buttonText}
        </div>{" "}
      </Link>
    </div>
  );
};
export default MenuButton;
