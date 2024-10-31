import { ProductOptionValue } from "@/types/product";
import React from "react";
import Selector from "./Selector";

type Props = {
  label?: string;
  id: string;
  productId: string;
  items: ProductOptionValue[];
};

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
