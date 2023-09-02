import Link from "next/link";
export interface ButtonProps {
  id?: number;
  buttonText: string;
  Icon: React.ElementType;
  path: string;
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
  selectedPath: string;
}

const DesktopButton = ({
  buttonText,
  Icon,
  path,
  setSelectedPath,
  selectedPath
}: ButtonProps) => {
  return (
    <div className="w-full h-12 ">
      {selectedPath === buttonText ? (
        <Link href={path} onClick={() => setSelectedPath(buttonText)}>
          <div className="bg-[#000] w-full h-full px-5 flex flex-row items-center rounded-sm border-gray-300/40 border-[1px] transition-transform translate-x-2">
            <Icon className="mr-2 h-4 w-4" />
            {buttonText}
          </div>{" "}
        </Link>
      ) : (
        <Link href={path} onClick={() => setSelectedPath(buttonText)}>
          <div className="bg-[#000] w-full h-full px-5 flex flex-row items-center rounded-sm hover:border-gray-300/40 hover:border-[1px] transition-transform hover:translate-x-2">
            <Icon className="mr-2 h-4 w-4" />
            {buttonText}
          </div>{" "}
        </Link>
      )}
    </div>
  );
};
export default DesktopButton;
