import iconsList from "@/icons/icon-list";
import { IconProps } from "@/icons/SvgWrapper";
import clsx from "clsx";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: keyof typeof iconsList;
  iconOptions?: Omit<IconProps, "children">;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, iconOptions, ...props }, forwardedRef) => {
    const IconComponent = iconsList[icon];
    return (
      <button
        ref={forwardedRef}
        className={clsx(
          "rounded border border-gray-100 inline-flex size-10 items-center justify-center text-gray-600 dark:border-gray-400 dark:text-white transition hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white/90",
          className
        )}
        {...props}
      >
        <IconComponent {...iconOptions} />
      </button>
    );
  }
);

export default IconButton;
