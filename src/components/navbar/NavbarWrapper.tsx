import Link from "next/link";
import React, { PropsWithChildren } from "react";

const NavbarWrapper = ({ children }: PropsWithChildren) => {
  return (
    <header className="border-1 border-gray-700 bg-white dark:border-b dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <Link
            prefetch={true}
            href="/"
            className="mr-5 block font-extrabold text-gray-900 dark:text-gray-300"
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
