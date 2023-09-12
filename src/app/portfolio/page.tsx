import { Wrench } from "lucide-react";

const Portfolio = () => {
  return (
    <div className=" flex justify-center items-center h-screen bg-[#111111]">
      <div className="flex flex-col items-center justify-center gap-6">
        <Wrench className="h-28 w-28 text-white" />
        <p className="text-white text-center max-w-[400px]">
          Essa página ainda está em construção! Aguarde
        </p>
      </div>
    </div>
  );
};
export default Portfolio;
