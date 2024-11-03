import React from "react";
import Skeleton from "../Skeleton";

const ProductListLoader = () => {
  return (
    <>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex">
          <Skeleton height={40} width={40} />
          <Skeleton height={40} width={40} />
        </div>

        <div>
          <label htmlFor="SortBy" className="sr-only">
            SortBy
          </label>
          <Skeleton height={38} width={138} className="mt-1" />
        </div>
      </div>

      <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
        <div className="hidden space-y-4 lg:block">
          <Skeleton height={16} width={100} />
          <div className="mt-1 space-y-2">
            <Skeleton height={54} width={216} className="mt-1" />
            <Skeleton height={54} width={216} className="mt-1" />
            <Skeleton height={54} width={216} className="mt-1" />
            <Skeleton height={54} width={216} className="mt-1" />
          </div>
        </div>
        <div className="lg:col-span-3">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, idx) => (
              <li key={idx}>
                <Skeleton height={350} className="w-full" />
                <div className="border-1 relative border border-gray-100 bg-white p-6 pt-3 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100">
                  <Skeleton height={24} />
                  <Skeleton height={24} className="mt-2 w-24" />
                  <div className="mt-2 flex min-h-16 flex-col gap-2.5">
                    <Skeleton height={24} />
                    <Skeleton height={24} />
                  </div>
                  <Skeleton height={38} className="mt-4" />
                </div>
              </li>
            ))}
          </ul>
          <Skeleton height={32} className="mx-auto mt-8 w-3/5" />
        </div>
      </div>
    </>
  );
};

export default ProductListLoader;
