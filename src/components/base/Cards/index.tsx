import Image from "next/image";
import backCard from "@/assets/backCard.png";
import Link from "next/link";

interface CardsProps {
  cards: string;
  name: string;
}

const Cards = ({ cards, name }: CardsProps) => {

  return (
    <>
      {cards ? (
        <Link   href={{
          pathname: '/search',
          query: { name: name },
        }}>
          <div className="relative hover:scale-105 transition-transform duration-300">
            <Image
              src={cards}
              width={328}
              height={484}
              alt=""
              className="rounded-sm h-[242px] w-[164px] md:h-[363px] md:w-[246px] transform-gpu cursor-pointer"
            />
          </div>
        </Link>
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
