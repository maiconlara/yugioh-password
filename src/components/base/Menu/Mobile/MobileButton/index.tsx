import Link from "next/link";
interface ButtonProps {
  id?: number;
  buttonText: string;
  Icon: React.ElementType;
  path: string;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileButton = ({ buttonText, Icon, path, setNav }: ButtonProps) => {
  return (
    <Link
    onClick={() => setNav(false)}
    href={path}
    className="w-[70vw] h-[6vh] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p4 cursor-pointer hover:scale-110 ease-in duration-200"
  >
    <Icon size={20} className="text-black" />
    <span className="pl-4 text-black">{buttonText}</span>
  </Link>
  );
};
export default MobileButton;
