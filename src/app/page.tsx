"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getCards, getImage } from "./api/api";
import { useState } from "react";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [image, setimage] = useState("");

  const handleCardsApi = async () => {
    const cards = await getCards();
    setCards(cards);
  };
  const handleImagesApi = async () => {
    const cards = await getImage();
    setimage(cards);
  };

  return (
    <div className=" flex justify-center items-center h-screen bg-[#111111]">
      <Button
        variant="outline"
        className="bg-[#09090B] text-white font-bold border-base-400"
        onClick={handleCardsApi}
      >
        Hello World!
      </Button>
      <p className="text-white"> {cards}</p>
      {image && <Image src="https://images.ygoprodeck.com/images/cards/6983839.jpg" alt="Vercel Logo" width={72} height={72} />}
    </div>
  );
}
