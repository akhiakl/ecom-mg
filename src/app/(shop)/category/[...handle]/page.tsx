import ProductList from "@/components/products/ProductList";

// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

type CategoryPageProps = {
  params: {
    handle: string[];
  };
};
export default function CategoryPage({ params }: CategoryPageProps) {
  return <ProductList />;
}
