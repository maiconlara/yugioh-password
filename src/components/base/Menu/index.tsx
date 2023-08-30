import MenuButton, { ButtonProps } from "./MenuButton";

const buttons: ButtonProps[] = [
  {
    id: 1,
    buttonText: "Home",
    icon: "A",
    path: "/",
  },
  {
    id: 2,
    buttonText: "Password",
    icon: "A",
    path: "/password",
  },
  {
    id: 3,
    buttonText: "Github",
    icon: "A",
    path: "/",
  },
  {
    id: 4,
    buttonText: "Portfolio",
    icon: "A",
    path: "/",
  },
];

export default function Menu() {
  return (
    <div className=" flex flex-col max-w-[20vw] w-full px-4 py-5 justify-between items-start h-screen bg-base-950 border-r-[1px] border-gray-300/40">
      <div className="flex flex-col w-full items-center gap-6">
        <h1>Yu-Gi-Oh!</h1>
        <div className="flex flex-col items-start justify-between w-full gap-6">
          {buttons.map((button) => (
            <MenuButton key={button.id} buttonText={button.buttonText} icon={button.icon} path={button.path} />
          ))}
        </div>
      </div>
      <h1>Meu Footer maneiro!</h1>
    </div>
  );
}
