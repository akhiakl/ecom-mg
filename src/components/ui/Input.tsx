import clsx from "clsx";
import React, { forwardRef, InputHTMLAttributes } from "react";

type InputType =
  // | "button"
  | "checkbox"
  // | "color"
  | "date"
  | "datetime-local"
  | "email"
  // | "file"
  // | "hidden"
  // | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  // | "range"
  // | "reset"
  | "search"
  // | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | (string & {});
type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  inputClassName?: string;
  labelClassName?: string;
  label?: string;
  type?: InputType;
};

const wrapperClassMap: Partial<Record<InputType, string>> = {
  text: "relative block overflow-hidden rounded-md border border-gray-300 px-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800",
  checkbox: "flex cursor-pointer items-center items-start gap-2",
  radio: "flex cursor-pointer items-center items-start gap-2",
};
const inputClassMap: Partial<Record<InputType, string>> = {
  text: "peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm",
  checkbox:
    "size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900",
  radio:
    "size-4 rounded-full border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900",
};
const labelClassMap: Partial<Record<InputType, string>> = {
  text: "absolute start-3 top-3 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs",
  checkbox: "font-medium",
  radio: "font-medium",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputClassName, labelClassName, ...props }, forwardedRef) => {
    const defaultClassName =
      wrapperClassMap[props?.type ?? "text"] ?? wrapperClassMap["text"];
    const inputDefaultClassName =
      inputClassMap[props?.type ?? "text"] ?? inputClassMap["text"];
    const labelDefaultClassName =
      labelClassMap[props?.type ?? "text"] ?? labelClassMap["text"];
    return (
      <label
        htmlFor={props.id}
        className={clsx(
          defaultClassName,
          className,
          props.placeholder ? "pt-3" : "py-1.5",
        )}
      >
        <input
          ref={forwardedRef}
          className={clsx(inputDefaultClassName, inputClassName)}
          {...props}
        />

        <span className={clsx(labelDefaultClassName, labelClassName)}>
          {props.placeholder ?? props.label}
        </span>
      </label>
    );
  },
);

Input.displayName = "Input";

export default Input;
