import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AboutCardProps {
    title: string;
    text: string;
}




const AboutCards = ({title, text} : AboutCardProps) => {
  return (
    <div className="h-[120px] w-[280px] rounded-md border bg-black border-gray-300/40 justify-start space-x-4 py-4 px-4 flex flex-row  hover:scale-105 transition-transform duration-300">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-bold">{title}</p>
        <p className="text-sm font-regular">{text}</p>
      </div>
    </div>
  );
};
export default AboutCards;
