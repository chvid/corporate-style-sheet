import { PropsWithChildren } from "react";
import { IconProps } from "./IconProps";

export const Icon: React.FC<PropsWithChildren & IconProps> = ({ children, float, width = 24, height = 24, color = "currentColor", fill = "none" }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    strokeWidth="1.5"
    stroke={color}
    fill={fill}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={"icon " + (float == "right" ? "right " : "")}
  >
    {children}
  </svg>
);
