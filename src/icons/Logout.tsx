import React from "react";
import SvgWrapper, { IconProps } from "./SvgWrapper";

const Logout = (props: Omit<IconProps, "children">) => (
  <SvgWrapper stroke="currentColor" strokeWidth={1.5} fill="none" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
    />
  </SvgWrapper>
);

export default Logout;
