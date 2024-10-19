import Link from "next/link";
import React from "react";
import NavbarWrapper from "./NavbarWrapper";

const Navbar = () => (
  <NavbarWrapper>
    <Link
      href="/"
      prefetch={true}
      className="block text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 ml-auto"
    >
      Back to home
    </Link>
  </NavbarWrapper>
);

export default Navbar;
