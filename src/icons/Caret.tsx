import React from "react";
import SvgWrapper, { IconProps } from "./SvgWrapper";

const Caret = (props: Omit<IconProps, "children">) => (
  <SvgWrapper stroke="currentColor" strokeWidth={1.5} {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </SvgWrapper>
);

export default Caret;
