import React from "react";
import { ProductFilter } from "@/types/product";
import FilterItem from "./FilterItem";

const FilterList = ({ filters }: { filters: ProductFilter[] }) => {
  return (
    <div>
      <p className="block text-xs font-medium">Filters</p>

      <div className="mt-1 space-y-2">
        {filters.map((filter) => (
          <FilterItem key={filter.code} filter={filter} />
        ))}
      </div>
    </div>
  );
};

export default FilterList;
