export type ProductOptionValue = {
  id?: string;
  label?: string;
  value?: string;
  type?: "color" | "text";
};
export type ProductOption = {
  id?: string;
  label?: string;
  values?: ProductOptionValue[];
};

export type Product = {
  id: string;
  name: string;
  urlKey: string;
  imageSrc?: string;
  imageAlt?: string;
  price: string;
  color?: string;
  badge?: {
    color?: string;
    text: string;
  };
  options?: ProductOption[];
};

export type ProductFilterOption = {
  count?: number;
  label?: string;
  value?: string;
};

export type ProductFilter = {
  code?: string;
  count?: number;
  label?: string;
  options?: ProductFilterOption[];
  position?: number;
};

export type Category = {
  id: string;
  name: string;
  urlKey: string;
  description?: string;
  products?: Product[];
  availableFilters?: ProductFilter[];
};
