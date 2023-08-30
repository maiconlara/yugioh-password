import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface ButtonProps {
  id?: number;
  buttonText: string;
  icon: string;
  path: string;
}

const MenuButton = ({ buttonText, icon, path }: ButtonProps) => {
  return (
    <Link href={path}>
      <div className="bg-[#1F2B3D] min-w-full border-top border-bottom border-base-400">
        {buttonText}
      </div>{" "}
    </Link>
  );
};
export default MenuButton;
