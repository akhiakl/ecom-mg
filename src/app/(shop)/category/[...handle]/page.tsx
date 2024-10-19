import { fetchProducts } from "@/actions/product";
import ProductList from "@/components/products/ProductList";

export async function generateStaticParams() {
  return [
    {
      handle: ["1"],
    },
  ];
}

// type CategoryPageProps = {
//   params: {
//     handle: string[];
//   };
// };
export default async function CategoryPage() {
  const products = await fetchProducts();
  return <ProductList products={products} />;
}
