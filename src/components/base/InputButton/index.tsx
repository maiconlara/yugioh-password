import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface InputButtonProps {
  placeholder: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardsApi: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  number?: boolean;
  plural?: boolean;
}

const InputButton = ({
  placeholder,
  handleInputChange,
  handleCardsApi,
  handleEnter,
  number,
  plural,
}: InputButtonProps) => {
  return (
    <>
      <Input
        maxLength={52}
        type={number ? "number" : "text"}
        placeholder={`ex. ${placeholder}`}
        className="bg-transparent border-[1px] w-[180px] md:w-[265px] border-gray-300/40 focus:ring-gray-500 focus:ring-1 focus:outline-none ring-offset-0 content-center"
        onInput={handleInputChange}
        onKeyDown={handleEnter}
      />
      <Button
        onClick={handleCardsApi}
        className="font-bold uppercase rounded-sm bg-[#000] border-gray-300/40 border-[1px] hover:bg-transparent transition-colors w-auto min-w-fit"
      >
        {plural ? ("Buscar cartas") : ("Buscar carta")}
      </Button>
    </>
  );
};
export default InputButton;
