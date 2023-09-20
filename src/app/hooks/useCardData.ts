import { CardObject } from "../interface/card";

export const useCardData = (card: CardObject | null | undefined) => {
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
  const cardImage = data ? data[0].card_images[0].image_url : "";
  const cardmarket_price = data ? data[0].card_prices : "N/A";
  const tcgplayer_price = data ? data[0].card_prices : "N/A";
  const ebay_price = data ? data[0].card_prices : "N/A";
  const amazon_price = data ? data[0].card_prices : "N/A";
  const coolstuffinc_price = data ? data[0].card_prices : "N/A";


  return {
    name,
    id,
    type,
    frameType,
    atk,
    def,
    zeroStatus,
    linkValue,
    race,
    attribute,
    croppedImage,
    cardImage,
    cardmarket_price,
    tcgplayer_price,
    ebay_price,
    amazon_price,
    coolstuffinc_price,
  }
};
