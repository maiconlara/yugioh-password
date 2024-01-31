import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

interface AboutCardProps {
  title: string;
  text: string;
  link: string;
  image: string;
}

const AboutCards = ({ title, text, image, link }: AboutCardProps) => {
  return (
    <div className="h-[120px] w-[280px] rounded-md border bg-black border-gray-300/40 justify-start space-x-4 py-4 px-4 flex flex-col">
      <div className="flex flex-row w-full">
        <Avatar>
          <AvatarImage  src={image} />
          <AvatarFallback>hi</AvatarFallback>
        </Avatar>
        <div className="space-y-1 ml-4 w-full">
          <p className="text-sm font-bold">{title}</p>
          <p className="text-sm font-regular">{text}</p>
        </div>
      </div>
      <div className="self-end text-sm py-6 font-bold uppercase flex flex-row items-center">
        <a
          href={link}
          className="flex items-center hover:text-gray-100 transition-transform hover:translate-x-1"
        >
          <ChevronRight className="h-4 w-4 text-white" /> Visitar
        </a>
      </div>
    </div>
  );
};
export default AboutCards;
