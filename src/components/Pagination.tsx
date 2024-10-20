import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
};

const Pagination = ({ className }: Props) => {
  return (
    <ol
      className={clsx(
        "flex justify-center gap-1 text-xs font-medium",
        className,
      )}
    >
      <li>
        <a
          href="#"
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-100 text-center leading-8"
        >
          1
        </a>
      </li>

      <li className="block size-8 rounded border-black bg-black text-center leading-8 text-white">
        2
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-100 text-center leading-8"
        >
          3
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-100 text-center leading-8"
        >
          4
        </a>
      </li>

      <li>
        <a
          href="#"
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
  );
};

export default Pagination;
