import axios from "axios";

export const getCards = async () => {
  const response = await axios.get(
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon"
  );
  return response.data.data[0].card_images[0].image_url;
};
