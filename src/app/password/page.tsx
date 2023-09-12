"use client";
import { Button } from "@/components/ui/button";
import { getCards } from "./../api/api";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import Cards from "@/components/base/Cards";


const Password = () => {
  const [cards, setCards] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");

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

  return (
    <div className="flex justify-center items-center h-screen bg-[#111111]">
      <div className="flex flex-col items-center gap-4">
        {isLoading ? (
          <div className="w-[246px] h-[363px] flex items-center justify-center">
            <Loader2 className="text-white animate-spin w-12 h-12 " />
          </div>
        ) : (
          <Cards cards={cards}/>
        )}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 pt-4">
          <Input
            type="number"
            placeholder="ex. 54752875"
            className="bg-transparent border-[1px] w-[160px] md:w-[265px] border-gray-300/40 focus:ring-gray-500 focus:ring-1 focus:outline-none ring-offset-0 content-center"
            onInput={handleInputChange}
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
