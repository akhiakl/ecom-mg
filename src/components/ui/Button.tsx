import React, {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  forwardRef,
  ForwardedRef,
} from "react";
import clsx from "clsx";
import Link, { LinkProps as InternalLinkProps } from "next/link";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "dark"
  | "light"
  | "success"
  | "danger"
  | "warning"
  | "outline"
  | "link";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

type LinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof InternalLinkProps
> &
  InternalLinkProps;
type HtmlButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = (LinkProps | HtmlButtonProps) & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
};

const isLinkProps = (props: ButtonProps): props is LinkProps => {
  return "href" in props;
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const baseStyles =
      "block rounded border transition text-sm font-medium focus:outline-none focus:ring";

    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        "border-gray-800 bg-gray-800 text-white hover:bg-transparent hover:text-gray-800 active:text-gray-700 dark:hover:text-gray-100 dark:hover:border-gray-100",
      secondary:
        "border-gray-900 bg-gray-400 text-gray-950 hover:bg-gray-100 active:text-gray-700",
      dark: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300",
      light:
        "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-100",
      success:
        "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300",
      danger: "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300",
      warning:
        "text-white bg-orange-400 hover:bg-orange-500 focus:ring-orange-300",
      outline:
        "text-grey-900 border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-700 dark:border-gray-100",
      link: "inline-block text-sm text-gray-500 underline underline-offset-4 hover:text-gray-600",
    };

    const sizeStyles: Record<ButtonSize, string> = {
      xs: "px-2 py-2 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-8 py-2.5",
      lg: "px-8 py-3 text-base",
      xl: "px-10 py-3 text-base",
    };

    const buttonClasses = clsx(
      { [baseStyles]: variant !== "link" },
      variantStyles[variant],
      sizeStyles[size],
      { "cursor-not-allowed opacity-50": disabled },
      className,
    );

    if (isLinkProps(props)) {
      return (
        <Link
          ref={forwardedRef as ForwardedRef<HTMLAnchorElement>}
          className={buttonClasses}
          {...props}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={forwardedRef as ForwardedRef<HTMLButtonElement>}
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...(props as HtmlButtonProps)}
      >
        {isLoading && (
          <svg
            aria-hidden="true"
            role="status"
            className="mr-2 inline h-4 w-4 animate-spin"
            viewBox="0 0 100 101"
            fill="none"
          >
            <circle cx="50" cy="50" r="45" stroke="#E5E7EB" strokeWidth="10" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539..."
              fill="currentColor"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
