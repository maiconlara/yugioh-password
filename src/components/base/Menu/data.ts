import { ButtonProps } from "./Desktop/DesktopButton";
import { Mail, Accessibility } from "lucide-react";

export const buttons: ButtonProps[] = [
  {
    id: 1,
    buttonText: "Home",
    Icon: Mail,
    path: "/",
  },
  {
    id: 2,
    buttonText: "Password",
    Icon: Mail,
    path: "/password",
  },
  {
    id: 3,
    buttonText: "Github",
    Icon: Accessibility,
    path: "/",
  },
  {
    id: 4,
    buttonText: "Portfolio",
    Icon: Accessibility,
    path: "/",
  },
];
