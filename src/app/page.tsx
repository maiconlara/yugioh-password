export default function Home() {
  return (
    <div className=" flex justify-center flex-col  items-center h-screen bg-[#111111] gap-8">
      <h1 className="text-white text-center md:text-4xl text-3xl md:max-w-[500px] max-w-[400px] font-bold">
        Bem-vindo ao Yu-Gi-Oh! App
      </h1>
      <p className="text-white text-center max-w-[400px] font-regular ">
        Aplicação feita para pesquisar cartas, ver informações e testar os
        passwords.
      </p>
    </div>
  );
}
