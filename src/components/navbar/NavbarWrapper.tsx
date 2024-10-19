import Link from "next/link";
import React, { PropsWithChildren } from "react";

const NavbarWrapper = ({ children }: PropsWithChildren) => {
  return (
    <header className="bg-white dark:bg-gray-900 dark:border-b border-gray-700 border-1">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <Link
            prefetch={true}
            href="/"
            className="block font-extrabold text-gray-900 dark:text-gray-300 mr-5"
          >
            Ecom mg
          </Link>
          {children}
        </div>
      </div>
    </header>
  );
};

export default NavbarWrapper;
