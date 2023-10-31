"use client";
import { getCards } from "./../api/api";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import Cards from "@/components/base/Cards";
import { CardObject } from "../interface/card";
import { useCardData } from "../utils/hooks/useCardData";
import InputButton from "@/components/base/InputButton";

const Password = () => {
  const [cards, setCards] = useState<CardObject | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");

  const { name, cardImage } = useCardData(cards);

  const handleCardsApi = async () => {
    setIsLoading(true);
    const cards = await getCards(password);
    setCards(cards);
    setIsLoading(false);
  };

  const handleInputChange = (event: any) => {
    const text = event.target.value;
    setPassword(text);
  };

  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      handleCardsApi();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#111111]">
      <div className="flex flex-col items-center gap-4">
        {isLoading ? (
          <div className=" h-[242px] w-[164px] md:h-[363px] md:w-[246px] flex items-center justify-center">
            <Loader2 className="text-white animate-spin w-12 h-12 " />
          </div>
        ) : (
          <Cards cards={cardImage} name={name} />
        )}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 pt-4">
          <InputButton
            placeholder="54752875"
            handleInputChange={handleInputChange}
            handleEnter={handleEnter}
            handleCardsApi={handleCardsApi}
          />
        </div>
      </div>
    </div>
  );
};
export default Password;
