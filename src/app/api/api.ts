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
      return null;
    }
  } catch (error) {
    return null;
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
      return null;
    }
  } catch (error) {
    return null;
  }
};
export const getCardsList = async (query: string) => {
  try {
    const response = await axios.get<CardObject>(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${query}`
    );
    if (response.status === 200) {
      const { data } = response;
      return data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
