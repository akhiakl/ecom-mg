export async function execute<TResult, TVariables>(
  query: string,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  if (!process.env.ECOM_BACKEND_API_URL) {
    throw new Error("Missing ECOM_BACKEND_API_URL environment variable");
  }
  const response = await fetch(process.env.ECOM_BACKEND_API_URL, {
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
