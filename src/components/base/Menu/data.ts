import { ButtonProps } from "./Desktop/DesktopButton";
import { Home, KeyRound, Github, LayoutGrid } from "lucide-react";

export const buttons: ButtonProps[] = [
  {
    id: 1,
    buttonText: "Home",
    Icon: Home,
    path: "/",
  },
  {
    id: 2,
    buttonText: "Password",
    Icon: KeyRound,
    path: "/password",
  },
  {
    id: 3,
    buttonText: "Github",
    Icon: Github,
    path: "/",
  },
  {
    id: 4,
    buttonText: "Portfolio",
    Icon: LayoutGrid,
    path: "/",
  },
];
