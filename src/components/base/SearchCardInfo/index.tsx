import { handleCardType } from "@/app/hooks/handleCardType";

import { CardObject } from "@/app/interface/card";
import { useCardData } from "@/app/hooks/useCardData";
import ImageContainer from "./ImageContainer";
import StatusContainer from "./StatusContainer";

interface SearchCardInfoProps {
  card: CardObject | undefined;
}

const SearchCardInfo = ({ card }: SearchCardInfoProps) => {
  const {
    name,
    id,
    type,
    frameType,
    croppedImage,
    race,
    attribute,
    atk,
    def,
    zeroStatus,
    linkValue,
  } = useCardData(card);

  const typeColor = handleCardType(frameType);

  return (
    <div className=" w-full rounded-md border bg-black border-gray-300/40 justify-start flex">
      <div className="flex flex-col w-full h-full py-4 px-4 gap-4">
        <div className="flex flex-col w-full items-center justify-center">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-sm font-regular">{type}</p>
        </div>
        <ImageContainer
          croppedImage={croppedImage}
          typeColor={typeColor}
          race={race}
          attribute={attribute}
        />
        <StatusContainer
          atk={atk}
          def={def}
          zeroStatus={zeroStatus}
          linkValue={linkValue}
        />
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
