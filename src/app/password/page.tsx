"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getCards } from "./../api/api";
import { useState } from "react";
import backCard from "@/assets/backCard.png";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const Password = () => {
  const [cards, setCards] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCardsApi = async () => {
    setIsLoading(true);
    const cards = await getCards();
    setCards(cards);
    setIsLoading(false);
  };

  return (
    <div className=" flex justify-center items-center h-screen bg-[#111111]">
      <div className="flex flex-col items-center gap-4">
        {isLoading ? (
          <div className="w-[246px] h-[363px] flex items-center justify-center">
            <Loader2 className="text-white animate-spin w-12 h-12 " />
          </div>
        ) : (
          <>
            {cards ? (
              <Image
                src={cards}
                width={246}
                height={363}
                alt=""
                className="rounded-sm ease-in-out"
              />
            ) : (
              <Image
                src={backCard}
                width={246}
                height={363}
                alt=""
                className="rounded-sm ease-in-out"
              />
            )}
          </>
        )}
        <div className="flex flex-row items-center justify-center gap-2 pt-4 w-[400px]">
          <Input
            type="number"
            placeholder="ex. 68752475"
            className="bg-transparent border-[1px] border-gray-300/40 focus:ring-gray-500 focus:ring-1 focus:outline-none ring-offset-0 content-center"
            maxLength={2}
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
export default Password;
