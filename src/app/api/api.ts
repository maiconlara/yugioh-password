import axios from "axios";

export const getCards = async (id: string) => {
  try {
    const response = await axios.get(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
    );

    if (response.status === 200) {
      return response.data.data[0].card_images[0].image_url;
    } else {
      console.error(`Request failed with status code ${response.status}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }

};
