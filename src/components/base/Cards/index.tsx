import Image from "next/image";
import backCard from "@/assets/backCard.png"; 

interface CardsProps {
    cards: string;
}

const Cards = ({cards} : CardsProps) => {
  return (
    <>
      {cards ? (
        <div className="relative hover:scale-105 transition-transform duration-300">
        <Image
          src={cards}
          width={328}
          height={484}
          alt=""
          className="rounded-sm h-[242px] w-[164px] md:h-[363px] md:w-[246px] transform-gpu"
        />
      </div>
      ) : (
        <div className="relative hover:translate-y-[-5px] hover:shadow-xl transition-transform duration-300">
        <Image
          src={backCard}
          width={328}
          height={484}
          alt=""
          className="rounded-sm h-[242px] w-[164px] md:h-[363px] md:w-[246px] transform-gpu"
        />
      </div>
      )}
    </>
  );
};
export default Cards;
