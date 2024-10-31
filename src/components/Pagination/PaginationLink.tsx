import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

type PaginationLinkProps = Omit<LinkProps, "href"> & {
  page: number;
  children?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onPageClick?: (page: number) => void;
};

const PaginationLink = ({
  active,
  disabled,
  page,
  children,
  onPageClick,
  ...props
}: PaginationLinkProps) => {
  const searchParams = useSearchParams();
  const Component = disabled ? "span" : Link;
  const createQueryString = useCallback(
    (name: string, value: string | number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, String(value));

      return params.toString();
    },
    [searchParams],
  );
  return (
    <Component
      href={{
        query: createQueryString("page", page),
      }}
      onClick={() => onPageClick?.(page)}
      className={clsx(
        "inline-flex size-8 items-center justify-center rounded border rtl:rotate-180",
        {
          "border-gray-700 bg-gray-800 text-gray-100 dark:border-gray-200 dark:bg-gray-50 dark:text-gray-900":
            active && !disabled,
          "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800":
            !active && !disabled,
          "bg-gray-100 dark:border-gray-800 dark:bg-gray-900":
            disabled && !active,
        },
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default PaginationLink;
