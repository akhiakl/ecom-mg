"use client";

import Caret from "@/icons/Caret";
import { ProductFilter } from "@/types/product";
import React, { DetailsHTMLAttributes } from "react";
import Input from "../ui/Input";
import Toggle from "../ui/Toggle";

type FilterItemProps = DetailsHTMLAttributes<HTMLDetailsElement> & {
  filter: ProductFilter;
};

const attributeMapping: Record<string, string> = {
  fashion_color: "checkbox",
  fashion_material: "checkbox",
  fashion_size: "checkbox",
  fashion_style: "checkbox",
  price: "radio",
  has_video: "toggle",
};

const FilterItem = ({ filter: { label, options, code } }: FilterItemProps) => {
  //   const [selectedFilters, setselectedFilters] = useState([]);

  return (
    <details className="group overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 transition">
        <span className="text-sm font-medium"> {label} </span>

        <span className="transition group-open:-rotate-180">
          <Caret size="small" />
        </span>
      </summary>

      <div className="border-t border-gray-300 bg-gray-100 dark:bg-gray-900">
        <header className="flex items-center justify-between p-4">
          <span className="text-sm"> 0 Selected </span>

          <button
            type="button"
            className="text-sm underline underline-offset-4"
          >
            Reset
          </button>
        </header>

        {code && attributeMapping[code] === "toggle" ? (
          <Toggle className="my-4 ml-4" id={code} name={code} />
        ) : (
          <ul className="space-y-1 border-t border-gray-300 p-4">
            {options?.map((option) => (
              <li key={option.value}>
                <Input
                  type={(code && attributeMapping[code!]) ?? "checkbox"}
                  id={option.value}
                  label={`${option.label} (${option.count})`}
                  name={code}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </details>
  );
};

export default FilterItem;
