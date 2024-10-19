import { Maybe } from "@/graphql/graphql";

export type Product = {
  id: string;
  name: string;
  urlKey: string;
  imageSrc?: Maybe<string>;
  imageAlt?: Maybe<string>;
  price: Maybe<string>;
  color?: Maybe<string>;
  badge?: {
    color?: string;
    text: string;
  };
};
