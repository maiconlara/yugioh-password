"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CardObject } from "@/app/interface/card";
import { getCardByName } from "../api/api";
import SearchCardInfo from "@/components/base/SearchCardInfo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import InputButton from "@/components/base/InputButton";

const Search = () => {
  const params = useSearchParams();
  const name = params.get("name");
  const [card, setCard] = useState<CardObject | null>();
  const [searchName, setSearchName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

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

  useEffect(() => {
    card === null && isLoading === false
      ? setShowMessage(true)
      : setShowMessage(false);
  }, [card]);

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
    <div className=" flex justify-center items-center h-screen bg-[#111111]">
      <div className="flex flex-col  h-[300px] md:w-[400px] md:h-[220px] justify-center md:justify-around">
        {showMessage ? (
          <div className="h-[20px]">
            <p className="text-xs font-bold text-red-400">
              Essa carta não foi encontrada.
            </p>
          </div>
        ) : (
          <div className="h-[20px]"></div>
        )}
        <div className="flex flex-row items-center justify-center gap-2 pt-4 pb-2">
          <InputButton
            placeholder="Red-Eyes Black Dragon"
            handleInputChange={handleInputChange}
            handleEnter={handleEnter}
            handleCardsApi={handleCardsApi}
          />
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center h-full w-full">
            <Loader2 className="text-white animate-spin w-12 h-12 " />
          </div>
        ) : card ? (
          <SearchCardInfo card={card} />
        ) : (
          <div className="flex items-center justify-center h-full w-full text-regular">
            Digite o nome completo de um carta
          </div>
        )}
      </div>
    </div>
  );
};
export default Search;
