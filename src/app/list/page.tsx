"use client";

import { useState } from "react";
import { CardObject } from "../interface/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getCardsList } from "../api/api";

const List = () => {
  const [card, setCard] = useState<CardObject>();
  const [searchName, setSearchName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCardsApi = async () => {
    setIsLoading(true);
    if (searchName.length > 3) {
      const response = await getCardsList(searchName);
      setCard(response);
      console.log(card);
      setIsLoading(false);
    } else {
      console.log("nope");
    }
  };

  const handleInputChange = (event: any) => {
    const text = event.target.value;
    setSearchName(text);
  };

  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      handleCardsApi();
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-[#111111]">
      <div className="absolute top-4 left-0 flex flex-row w-[300px]">
        <div className="flex flex-row items-center justify-center gap-2 pt-4">
          <Input
            maxLength={52}
            type="text"
            placeholder="ex. Neko..."
            className="bg-transparent border-[1px] w-[180px] md:w-[265px] border-gray-300/40 focus:ring-gray-500 focus:ring-1 focus:outline-none ring-offset-0 content-center"
            onInput={handleInputChange}
            onKeyDown={handleEnter}
          />
          <Button
            onClick={handleCardsApi}
            className="font-bold uppercase rounded-sm bg-[#000] border-gray-300/40 border-[1px] hover:bg-transparent transition-colors w-auto min-w-fit"
          >
            Buscar carta
          </Button>
        </div>
      </div>
      
    </div>
  );
};
export default List;
