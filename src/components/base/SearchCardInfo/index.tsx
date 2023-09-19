import { handleCardType } from "@/app/hooks/handleCardType";

import { CardObject } from "@/app/interface/card";
import ImageContainer from "./ImageContainer";

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
  const linkValue = data ? data[0].linkval : "";
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
        <ImageContainer croppedImage={croppedImage} typeColor={typeColor} race={race} attribute={attribute} />
        <div className="flex flex-row w-full gap-8 justify-center">
          {atk || def || zeroStatus ? (
            <>
              <p className="text-sm font-regular">Ataque: {atk}</p>
              {linkValue ? (
                <p className="text-sm font-bold">LINK-{linkValue}</p>
              ) : (
                <p className="text-sm font-regular">Defesa: {def}</p>
              )}
            </>
          ) : null}
        </div>
        <div className="w-full bg-gray-300/40 h-px"></div>
        <div className="flex flex-row w-full gap-1 justify-center font-bold">
          {id && (
            <>
              <p className="text-sm">Password: {id}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchCardInfo;
