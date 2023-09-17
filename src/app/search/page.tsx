"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CardObject } from "@/app/interface/card";
import { getCardByName } from "../api/api";
import SearchCardInfo from "@/components/base/SearchCardInfo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search = () => {
  const params = useSearchParams();
  const name = params.get("name");
  const [card, setCard] = useState<CardObject>();
  const [searchName, setSearchName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (name) {
      getCardByName(name).then((res) => {
        setCard(res);
      });
    }
  }, []);

  const handleCardsApi = async () => {
    setIsLoading(true);
    const response = await getCardByName(searchName);
    setCard(response);
    setIsLoading(false);
  };

  const handleInputChange = (event: any) => {
    const text = event.target.value;
    setSearchName(text);
  };

  return (
    <div className=" flex justify-center items-center h-screen bg-[#111111]">
      <div className="flex flex-col w-[400px] h-[300px] md:h-[220px] justify-center md:justify-around gap-3">
        <div className="flex flex-row items-center justify-center gap-2 pt-4">
          <Input
            maxLength={52}
            type="text"
            placeholder="ex. Red-Eyes Black Dragon"
            className="bg-transparent border-[1px] w-[400px] md:w-[265px] border-gray-300/40 focus:ring-gray-500 focus:ring-1 focus:outline-none ring-offset-0 content-center"
            onInput={handleInputChange}
            
          />
          <Button
            onClick={handleCardsApi}
            className="font-bold uppercase rounded-sm bg-[#000] border-gray-300/40 border-[1px] hover:bg-transparent transition-colors w-auto min-w-fit"
          >
            Buscar carta
          </Button>
        </div>
        <SearchCardInfo card={card} />
      </div>
    </div>
  );
};
export default Search;
