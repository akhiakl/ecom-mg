"use client";

import useClickOutside from "@/hooks/useClickOutside";
import clsx from "clsx";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  ButtonHTMLAttributes,
} from "react";

interface DropdownContextType {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
});

const useDropdown = () => useContext(DropdownContext);

type AnchorProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Anchor = ({ children, className, onClick, ...props }: AnchorProps) => {
  const { onOpen, onClose, isOpen } = useDropdown();
  return (
    <button
      type="button"
      className={clsx("block overflow-hidden", className)}
      onClick={(e) => {
        onClick?.(e);
        if (isOpen) {
          onClose?.();
          return;
        }
        onOpen?.();
      }}
      {...props}
    >
      <span className="sr-only">Toggle dropdown menu</span>
      {children}
    </button>
  );
};

type ContentProps = ButtonHTMLAttributes<HTMLDivElement>;

const Content = ({ children, className, ...props }: ContentProps) => {
  const { isOpen } = useDropdown(); // Get isOpen from context
  return (
    <div
      className={clsx(
        "absolute end-0 mt-1 rounded-md border border-gray-100 bg-white shadow-lg transition dark:border-gray-800 dark:bg-gray-900",
        {
          "invisible -z-10 opacity-0": !isOpen,
          "visible z-10": isOpen,
        },
        className,
      )}
      {...props}
    >
      {isOpen && <div className="flex-1 p-2">{children}</div>}
    </div>
  );
};

type DropdownProps = PropsWithChildren<{
  className?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}>;

const Dropdown = ({
  className,
  children,
  onOpen,
  onClose,
  isOpen = false,
}: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => onClose?.());
  return (
    <DropdownContext.Provider value={{ isOpen, onOpen, onClose }}>
      <div ref={ref} className={clsx("relative", className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Anchor = Anchor;
Dropdown.Content = Content;

export default Dropdown;
