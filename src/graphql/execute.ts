import fetchToCurl from "fetch-to-curl";

export async function execute<TResult, TVariables>(
  query: string,
  variables?: TVariables,
) {
  if (!process.env.ECOM_BACKEND_API_URL) {
    throw new Error("Missing ECOM_BACKEND_API_URL environment variable");
  }
  const url = process.env.ECOM_BACKEND_API_URL;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Store: "default",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    console.log("Error while fetching curl:", fetchToCurl(url, options));
    throw new Error("Something went wrong!");
  }

  const { data } = await response.json();

  return data as TResult;
}
