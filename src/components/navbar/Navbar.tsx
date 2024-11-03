import Link from "next/link";
import React from "react";
import NavbarWrapper from "./NavbarWrapper";
import AuthDropdown from "./AuthDropdown";
import IconButton from "../ui/IconButton";
import MiniCart from "./MiniCart";

type Menu = {
  title: string;
  path: string;
};

const menu: Menu[] = [
  { title: "Category", path: "/category/venia-bottoms" },
  { title: "Geg", path: "/geg" },
  { title: "Products", path: "/products" },
];

const Navbar = () => (
  <NavbarWrapper>
    <div className="order-first mr-5 block md:hidden">
      <IconButton
        icon="hamburger"
        className="bg-gray-100"
        iconOptions={{ strokeWidth: 2.3 }}
      />
    </div>
    {menu.length ? (
      <nav aria-label="Global" className="mr-auto hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          {menu.map((item: Menu) => (
            <li key={item.title}>
              <Link
                href={item.path}
                prefetch={true}
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    ) : null}
    <div className="mx-5 flex items-center gap-5 text-gray-700 dark:text-gray-50">
      <MiniCart />
      <AuthDropdown />
    </div>
  </NavbarWrapper>
);

export default Navbar;
