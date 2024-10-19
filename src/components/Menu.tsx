import iconsList from "@/icons/icon-list";
import clsx from "clsx";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export type MenuItem = {
  id: string;
  title: string;
  href?: string;
  action?: () => void;
  icon?: keyof typeof iconsList;
};

type Props = PropsWithChildren<{
  className?: string;
  menuItems: MenuItem[];
  onMenuItemClick?: () => void;
}>;

const MenuLink = ({
  title,
  href,
  action,
  icon,
  onClick,
}: MenuItem & { onClick?: () => void }) => {
  const linkClass =
    "block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300";
  let linkLabel: string | React.JSX.Element = title;
  if (icon) {
    const IconComponent = icon && iconsList[icon];
    linkLabel = (
      <>
        {<IconComponent />}
        {title}
      </>
    );
  }
  if (href)
    return (
      <Link href={href} role="menuitem" className={linkClass} onClick={onClick}>
        {linkLabel}
      </Link>
    );
  if (action)
    return (
      <button
        type="button"
        className={clsx(linkClass, "w-full flex items-center gap-2")}
        role="menuitem"
        onClick={() => {
          onClick?.();
          action();
        }}
      >
        {linkLabel}
      </button>
    );
};

const Menu = ({ onMenuItemClick, menuItems }: Props) => {
  return menuItems.map((menuItem) => (
    <MenuLink key={menuItem.id} {...menuItem} onClick={onMenuItemClick} />
  ));
};

export default Menu;
