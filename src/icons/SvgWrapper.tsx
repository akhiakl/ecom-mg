import React, { SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
  className?: string;
  strokeWidth?: number;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

const sizeMap = {
  small: 16,
  medium: 20,
  large: 24,
};

const SvgWrapper = ({ size = "medium", children, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={sizeMap[size]}
    height={sizeMap[size]}
    {...props}
  >
    {children}
  </svg>
);

export default SvgWrapper;
