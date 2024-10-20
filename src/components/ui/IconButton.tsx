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
          "inline-flex size-10 items-center justify-center rounded border border-gray-100 text-gray-600 transition hover:bg-gray-50 hover:text-gray-700 dark:border-gray-400 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white/90",
          className,
        )}
        {...props}
      >
        <IconComponent {...iconOptions} />
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export default IconButton;
