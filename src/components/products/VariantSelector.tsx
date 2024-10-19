import clsx from "clsx";
import React from "react";

type SelectorProps = {
  label?: string;
  id: string;
  value: string;
  name: string;
  type: "color" | "text";
};
type Props = {
  label?: string;
  id: string;
  productId: string;
  items: Omit<SelectorProps, "name">[];
};

const Selector = ({ type, value, id, label, name }: SelectorProps) => (
  <div>
    <input
      type="radio"
      value={value}
      id={id}
      name={name}
      className="sr-only peer"
    />
    <label
      htmlFor={id}
      style={{
        backgroundColor: type === "color" ? value : undefined,
      }}
      className={clsx(
        "flex justify-center items-center leading-none cursor-pointer transition hover:!opacity-100 peer-checked:ring ring-gray-900 dark:ring-gray-100",
        type === "color"
          ? "size-6 rounded-full"
          : "ring ring-1 peer-checked:ring-2 p-1"
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
