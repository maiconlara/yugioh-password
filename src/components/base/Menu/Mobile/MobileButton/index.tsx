import Link from "next/link";
export interface ButtonProps {
  id?: number;
  buttonText: string;
  Icon: React.ElementType;
  path: string;
}

const MenuButton = ({ buttonText, Icon, path }: ButtonProps) => {
  return (
    <div className="w-full h-12 ">
      <Link href={path}>
        <div className="bg-[#1F2B3D] w-full h-full px-5 flex flex-row items-center rounded-sm hover:bg-base-400 transition-colors">
          <Icon className="mr-2 h-4 w-4" />
          {buttonText}
        </div>{" "}
      </Link>
    </div>
  );
};
export default MenuButton;
