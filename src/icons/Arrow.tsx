import React from "react";
import SvgWrapper, { IconProps } from "./SvgWrapper";

const directionMap = {
  left: "rotate(180deg)",
  right: "rotate(0)",
  up: "rotate(270deg)",
  down: "rotate(90deg)",
};

const Arrow = ({
  direction = "right",
  ...props
}: Omit<IconProps, "children">) => (
  <SvgWrapper viewBox="0 0 20 20" stroke="currentColor" {...props}>
    <path
      style={{
        transformOrigin: "center",
        transform: directionMap[direction],
      }}
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </SvgWrapper>
);

export default Arrow;
