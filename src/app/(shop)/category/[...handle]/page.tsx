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
export default function CategoryPage() {
  return <ProductList />;
}
