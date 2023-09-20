"use client";

import { useEffect, useState } from "react";
import { CardObject } from "../interface/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getCardsList } from "../api/api";
import { Loader2 } from "lucide-react";
import ListCard from "@/components/base/ListCard";

const List = () => {
  const [card, setCard] = useState<CardObject | null>();
  const [searchName, setSearchName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showNoCard, setShowNoCard] = useState(false);

  const list = card?.data;

  const handleCardsApi = async () => {
    setIsLoading(true);
    if (searchName.length > 3) {
      const response = await getCardsList(searchName);
      setCard(response);
      setIsLoading(false);
    } else {
      setShowMessage(true)
      setIsLoading(false);
    }
  };

  useEffect(() => {
    card === null && isLoading === false ? setShowNoCard(true) : setShowNoCard(false);
  }, [card]);

  const handleInputChange = (event: any) => {
    const text = event.target.value;
    setShowMessage(false);
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
        <div className="flex flex-col">
          {showMessage ? (
            <div className="h-[20px]">
              <p className="text-xs font-bold text-red-400">
                É necessario 4 letras para pesquisar
              </p>
            </div>
          ) : (
            <div className="h-[20px]"></div>
          )}
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
              Buscar cartas
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-6 py-6 mt-20 max-h-[80vh]">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="text-white animate-spin w-12 h-12 " />
          </div>
        ) : !showNoCard ? (
          <div className="flex flex-wrap items-center gap-2 justify-center pb-6">
            {list?.map((item, index) => {
              return (
                <ListCard
                  name={item.name}
                  id={item.id}
                  image={item.card_images[0].image_url_cropped}
                  key={index}
                />
              );
            })}
          </div>
        ) : (
          <div>
            <p className="font-regular text-xl">Não foram encontradas cartas!</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default List;
