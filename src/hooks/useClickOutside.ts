import React, { useEffect } from "react";

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current?.contains(e.target as Node)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useClickOutside;
