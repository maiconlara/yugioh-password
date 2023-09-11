"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getCards} from "./../api/api";
import { useState } from "react";

const Password = () => {
  const [cards, setCards] = useState("");

  const handleCardsApi = async () => {
    const cards = await getCards();
    setCards(cards);
  };


  return (
    <div className=" flex justify-center items-center h-screen bg-[#111111]">
      <div className="flex flex-col items-center gap-4">

      <Image src={cards} width={328} height={484}  alt="" />
      <Button onClick={handleCardsApi} className="font-bold uppercase hover:bg-transparent hover:text-blue-800 transition-colors">Buscar carta</Button>
      </div>
    </div>
  );
};
export default Password;
