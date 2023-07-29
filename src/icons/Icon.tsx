import { PropsWithChildren } from "react";
import { IconProps } from "./IconProps";

export const Icon: React.FC<PropsWithChildren & IconProps> = ({ children, float }) => (
  <svg
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={"icon " + (float == "right" ? "right " : "")}
  >
    {children}
  </svg>
);
