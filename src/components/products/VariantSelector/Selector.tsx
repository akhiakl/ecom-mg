"use client";
import React from "react";
import { ProductOptionValue } from "@/types/product";
import clsx from "clsx";

type SelectorProps = ProductOptionValue & {
  name?: string;
};
const Selector = ({ type, value, id, label, name }: SelectorProps) => (
  <div>
    <input
      type="radio"
      value={value}
      id={id}
      name={name}
      className="peer sr-only"
    />
    <label
      htmlFor={id}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      style={{
        backgroundColor: type === "color" ? value : undefined,
      }}
      className={clsx(
        "flex cursor-pointer items-center justify-center leading-none ring-gray-900 transition hover:!opacity-100 peer-checked:ring dark:ring-gray-100",
        type === "color"
          ? "size-6 rounded-full"
          : "p-1 ring ring-1 peer-checked:ring-2",
      )}
    >
      <span
        className={clsx({
          "sr-only": type === "color",
        })}
      >
        {label}
      </span>
    </label>
  </div>
);

export default Selector;
