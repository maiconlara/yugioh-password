import { handleCardType } from "@/app/hooks/handleCardType";
import { CardObject } from "@/app/interface/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

interface SearchCardInfoProps {
  card: CardObject | undefined;
}

const SearchCardInfo = ({ card }: SearchCardInfoProps) => {
  const { data } = card || {};
  const name = data ? data[0].name : "";
  const id = data ? data[0].id : "";
  const type = data ? data[0].type : "";
  const frameType = data ? data[0].frameType : "";
  const atk = data ? data[0].atk : "";
  const def = data ? data[0].def : "";
  const zeroStatus = atk || def === 0;
  const race = data ? data[0].race : "";
  const attribute = data ? data[0].attribute : "";
  const croppedImage = data ? data[0].card_images[0].image_url_cropped : "";
  const cardmarket_price = data ? data[0].card_prices : "N/A";
  const tcgplayer_price = data ? data[0].card_prices : "N/A";
  const ebay_price = data ? data[0].card_prices : "N/A";
  const amazon_price = data ? data[0].card_prices : "N/A";
  const coolstuffinc_price = data ? data[0].card_prices : "N/A";

  const typeColor = handleCardType(frameType);

  return (
    <div className=" w-full rounded-md border bg-black border-gray-300/40 justify-start flex">
      <div className="flex flex-col w-full h-full py-4 px-4 gap-4">
        <div className="flex flex-col w-full items-center justify-center">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-sm font-regular">{type}</p>
        </div>
        <div className="flex flex-col gap-1 w-full items-center justify-center">
          {croppedImage && (
            <img src={croppedImage} alt="" className="rounded-lg w-28 h-28" />
          )}
          <div
            className={`items-center rounded-full text-black px-2`}
            style={typeColor}
          >
            {race && attribute && (
              <p className="text-xs font-regular">
                {race} / {attribute}
              </p>
            )}
            {race && !attribute && (
              <p className="text-xs font-regular">{race}</p>
            )}
            {!race && attribute && (
              <p className="text-xs font-regular">{attribute}</p>
            )}
          </div>
        </div>
        <div className="flex flex-row w-full gap-8 justify-center">
          {atk || def || zeroStatus ? (
            <>
              <p className="text-sm font-regular">Ataque: {atk}</p>
              <p className="text-sm font-regular">Defesa: {def}</p>
            </>
          ) : null}
        </div>
        <div className="w-full bg-gray-300/40 h-px"></div>
      </div>
    </div>
  );
};
export default SearchCardInfo;
