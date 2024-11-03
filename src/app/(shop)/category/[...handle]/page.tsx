import { fetchCategory } from "@/actions/product";
import ProductList from "@/components/products/ProductList";
import ProductListLoader from "@/components/products/ProductListLoader";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  return [
    {
      handle: ["venia-bottoms"],
    },
  ];
}

type CategoryPageProps = {
  params: Promise<{
    handle: string[];
  }>;
};
export default async function CategoryPage(props: CategoryPageProps) {
  const params = await props.params;
  const {
    id,
    name,
    description,
    availableFilters,
    availableSortOptions,
    products,
  } = await fetchCategory(params.handle.join("/"));

  if (!id) {
    notFound();
  }

  return (
    <section>
      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold sm:text-3xl">{name}</h2>

          {description && (
            <p className="mt-4 max-w-md text-gray-500">{description}</p>
          )}
        </header>

        <Suspense fallback={<ProductListLoader />}>
          <ProductList
            filters={availableFilters}
            products={products ?? []}
            sortOptions={availableSortOptions ?? []}
          />
        </Suspense>
      </div>
    </section>
  );
}
