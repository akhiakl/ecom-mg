import React from "react";
import SvgWrapper, { IconProps } from "./SvgWrapper";

const Hamburger = (props: Omit<IconProps, "children">) => (
  <SvgWrapper strokeWidth={1.5} fill="none" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
    />
  </SvgWrapper>
);

export default Hamburger;
