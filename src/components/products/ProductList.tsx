import Pagination from "../Pagination";
import ProductCard from "./ProductCard";
import IconButton from "../ui/IconButton";
import Select from "../ui/Select";
import { Product, ProductFilter, SortOption } from "@/types/product";
import FilterList from "./FilterList";

type ProductListProps = {
  products: Product[];
  filters?: ProductFilter[];
  sortOptions?: SortOption[];
};

const ProductList = ({ products, filters, sortOptions }: ProductListProps) => {
  return (
    <>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex">
          <IconButton icon="grid" />
          <IconButton icon="hamburger" />
        </div>

        <div>
          <label htmlFor="SortBy" className="sr-only">
            SortBy
          </label>
          {sortOptions?.length && (
            <Select id="SortBy" label="Sort By" className="capitalize">
              {sortOptions?.map((sortOption) => (
                <option key={sortOption.value} value={sortOption.value}>
                  {sortOption.value}
                </option>
              ))}
            </Select>
          )}
        </div>
      </div>

      <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
        <div className="hidden space-y-4 lg:block">
          {filters?.length ? (
            <FilterList filters={filters} />
          ) : (
            <p>No apllicable filters</p>
          )}
        </div>
        <div className="lg:col-span-3">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products?.map((product, idx) => (
              <li key={product.id}>
                <ProductCard product={product} productIndex={idx} />
              </li>
            ))}
          </ul>
          <Pagination className="mt-8" />
        </div>
      </div>
    </>
  );
};

export default ProductList;
