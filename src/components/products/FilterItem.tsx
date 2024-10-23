"use client";

import Caret from "@/icons/Caret";
import { ProductFilter } from "@/types/product";
import React, { DetailsHTMLAttributes, useCallback, useState } from "react";
import Input from "../ui/Input";
import Toggle from "../ui/Toggle";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedOptions, setSelectedOptions] = useState(
    (searchParams.getAll(code) ?? []).filter((value) =>
      new Set(options?.map((c) => c.value))?.has(value),
    ),
  );
  const [isOpen] = useState(searchParams.has(code));

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.append(code, value);

      return params.toString();
    },
    [searchParams],
  );

  const selectOption = (checked: boolean, value?: string) => {
    if (!value) return;
    if (!checked) {
      setSelectedOptions((prev) => prev.filter((option) => option !== value));
      router.replace(pathname + "?" + createQueryString(value), {
        scroll: false,
      });
      return;
    }
    if (value && checked && !selectedOptions.includes(value)) {
      setSelectedOptions((prev) => [...prev, value]);
      router.replace(pathname + "?" + createQueryString(value), {
        scroll: false,
      });
    }
  };
  const reset = () => {
    setSelectedOptions([]);
    const params = new URLSearchParams(searchParams.toString());
    params.delete(code);
    router.push(pathname + "?" + params.toString(), { scroll: false });
  };
  return (
    <details
      open={isOpen}
      className="group overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 transition">
        <span className="text-sm font-medium"> {label} </span>

        <span className="transition group-open:-rotate-180">
          <Caret size="small" />
        </span>
      </summary>

      <div className="border-t border-gray-300 bg-gray-100 dark:bg-gray-900">
        <header className="flex items-center justify-between p-4">
          <span className="text-sm"> {selectedOptions.length} Selected </span>

          <button
            type="button"
            className="text-sm underline underline-offset-4"
            onClick={reset}
          >
            Reset
          </button>
        </header>

        {attributeMapping[code] === "toggle" ? (
          <Toggle className="my-4 ml-4" id={code} name={code} />
        ) : (
          <ul className="space-y-1 border-t border-gray-300 p-4">
            {options?.map((option) => (
              <li key={option.value}>
                <Input
                  type={attributeMapping[code] ?? "checkbox"}
                  id={option.value}
                  checked={selectedOptions.includes(option?.value ?? "")}
                  label={`${option.label} (${option.count})`}
                  name={code}
                  onChange={(e) => selectOption(e.target.checked, option.value)}
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
