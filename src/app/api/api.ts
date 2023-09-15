import axios from "axios";
import { CardObject } from "../interface/card";

export const getCards = async (id: string) => {
  try {
    const response = await axios.get<CardObject>(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
    );
    if (response.status === 200) {
      const { data } = response;
      return data;
    } else {
      console.error(`Request failed with status code ${response.status}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
export const getCardByName = async (name: string) => {
  try {
    const response = await axios.get<CardObject>(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`
    );
    if (response.status === 200) {
      const { data } = response;
      return data;
    } else {
      console.error(`Request failed with status code ${response.status}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
