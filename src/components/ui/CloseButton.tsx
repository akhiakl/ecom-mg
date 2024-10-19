import Close from "@/icons/Close";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

const CloseButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, forwardedRef) => (
  <button
    ref={forwardedRef}
    aria-label="Close"
    className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
    {...props}
  >
    <Close size="small" />
  </button>
));

export default CloseButton;
