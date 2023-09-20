import Image from "next/image";
interface ImageContainerProps {
  croppedImage: string;
  typeColor: React.CSSProperties;
  race: string;
  attribute: string;
}

const ImageContainer = ({
  croppedImage,
  typeColor,
  race,
  attribute,
}: ImageContainerProps) => {
  return (
    <div className="flex flex-col gap-1 w-full items-center justify-center">
      {croppedImage && (
        <Image
            src={croppedImage}
            width={280}
            height={280}
            alt=""
            className="rounded-lg w-28 h-28"
          />
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
        {race && !attribute && <p className="text-xs font-regular">{race}</p>}
        {!race && attribute && (
          <p className="text-xs font-regular">{attribute}</p>
        )}
      </div>
    </div>
  );
};
export default ImageContainer;
