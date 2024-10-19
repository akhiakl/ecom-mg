import type { TypedDocumentString } from "./graphql";

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  const response = await fetch("https://www.aemshop.net/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/graphql-response+json",
      Store: "default",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const { data } = await response.json();

  return data as TResult;
}
