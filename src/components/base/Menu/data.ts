import { Home, KeyRound, ZoomIn, User, ListOrdered } from "lucide-react";

export const buttons = [
  {
    id: 1,
    buttonText: "Home",
    Icon: Home,
    path: "/",
  },
  {
    id: 2,
    buttonText: "Lista",
    Icon: ListOrdered,
    path: "/list",
  },
  {
    id: 3,
    buttonText: "Pesquisar",
    Icon: ZoomIn,
    path: "/search",
  },
  {
    id: 4,
    buttonText: "Password",
    Icon: KeyRound,
    path: "/password",
  },
  {
    id: 5,
    buttonText: "Sobre Mim",
    Icon: User,
    path: "/about",
  },
];
