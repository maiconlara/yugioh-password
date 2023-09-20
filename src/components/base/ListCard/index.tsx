import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

interface ListCardProps {
  name: string;
  id: number;
  image: string;
}

const ListCard = ({ name, id, image }: ListCardProps) => {
  const showTooltip = name.length > 25;
  return (
    <div className=" w-[200px] h-[200px] rounded-md border bg-black border-gray-300/40  justify-start flex">
      <div className="flex flex-col w-full h-full py-4 px-4 gap-4">
        <div className="flex flex-col w-full items-center justify-center">
          {showTooltip ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-sm font-bold max-w-full truncate">
                    {name}
                  </p>
                </TooltipTrigger>
                <TooltipContent className="bg-black border-gray-300/40 text-white text-regular">
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <p className="text-sm font-bold max-w-full truncate">{name}</p>
          )}
          <p className="text-sm font-regular">{id}</p>
        </div>
        <div className="items-center justify-center flex">
          <Image
            src={image}
            width={112}
            height={112}
            alt=""
            className="rounded-lg w-28 h-28"
          />
        </div>
      </div>
    </div>
  );
};
export default ListCard;
