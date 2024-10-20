import { ProductOptionValue } from "@/types/product";
import clsx from "clsx";
import React from "react";

type SelectorProps = ProductOptionValue & {
  name?: string;
};
type Props = {
  label?: string;
  id: string;
  productId: string;
  items: ProductOptionValue[];
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

const VariantSelector = ({ label, id, productId, items }: Props) => {
  return (
    <form>
      {label && (
        <fieldset>
          <legend className="sr-only">{label}</legend>
        </fieldset>
      )}

      <div className="flex flex-wrap gap-1 [&:hover_label]:opacity-75">
        {items.map((item) => (
          <Selector
            key={item.id}
            {...item}
            name={`${productId}_${id}`}
            id={`${productId}_${id}_${item.id}`}
          />
        ))}
      </div>
    </form>
  );
};

export default VariantSelector;
