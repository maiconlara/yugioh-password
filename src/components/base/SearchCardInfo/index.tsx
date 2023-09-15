import { CardObject } from "@/app/interface/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

interface SearchCardInfoProps {
  card: CardObject | undefined;
}

const SearchCardInfo = ({ card }: SearchCardInfoProps) => {
  const { data } = card || {};
  const name = data ? data[0].name : "";
  const type = data ? data[0].type : "";
  const croppedImage = data ? data[0].card_images[0].image_url_cropped : "";

  return (
    <div className="h-[20vh] w-full rounded-md border bg-black border-gray-300/40 justify-start space-x-4 py-4 px-4 flex flex-col">
      <div className="flex flex-row w-full">
        <Avatar>
          <AvatarImage src={croppedImage} />
          <AvatarFallback>hi</AvatarFallback>
        </Avatar>
        <div className="space-y-1 ml-4 w-full">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-sm font-regular">{type}</p>
        </div>
      </div>
      <div className="self-end text-sm py-6 font-bold uppercase flex flex-row items-center">
        <a
          href={""}
          className="flex items-center hover:text-gray-100 transition-transform hover:translate-x-1"
        >
          <ChevronRight className="h-4 w-4 text-white" /> Visitar
        </a>
      </div>
    </div>
  );
};
export default SearchCardInfo;
