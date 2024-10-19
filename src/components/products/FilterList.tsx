import Caret from "@/icons/Caret";
import { ProductFilter } from "@/types/product";
import React, { DetailsHTMLAttributes } from "react";

const Filter = ({
  filter,
}: DetailsHTMLAttributes<HTMLDetailsElement> & {
  filter: ProductFilter;
}) => (
  <details className="group overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 transition">
      <span className="text-sm font-medium"> {filter.label} </span>

      <span className="transition group-open:-rotate-180">
        <Caret size="small" />
      </span>
    </summary>

    <div className="border-t border-gray-200 bg-gray-100 dark:bg-gray-900">
      <header className="flex items-center justify-between p-4">
        <span className="text-sm"> 0 Selected </span>

        <button type="button" className="text-sm underline underline-offset-4">
          Reset
        </button>
      </header>

      <ul className="space-y-1 border-t border-gray-200 p-4">
        {filter.options?.map((option) => (
          <li key={option.value}>
            <label
              htmlFor="FilterInStock"
              className="inline-flex items-center gap-2"
            >
              <input
                type="checkbox"
                id="FilterInStock"
                className="size-5 rounded border-gray-300"
              />

              <span className="text-sm font-medium">
                {option.label} ({option.count})
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  </details>
);

const FilterList = ({ filters }: { filters: ProductFilter[] }) => {
  return (
    <div>
      <p className="block text-xs font-medium">Filters</p>

      <div className="mt-1 space-y-2">
        {filters.map((filter) => (
          <Filter key={filter.code} filter={filter} />
        ))}
      </div>
    </div>
  );
};

export default FilterList;
