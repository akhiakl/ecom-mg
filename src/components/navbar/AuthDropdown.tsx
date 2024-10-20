"use client";
import React, { useState } from "react";
import User from "@/icons/User";
import Dropdown from "../DropDown";
import Menu from "../Menu";

type Props = {
  className?: string;
};

const AuthDropdown = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      className={className}
    >
      <Dropdown.Anchor>
        <User size="large" />
      </Dropdown.Anchor>
      <Dropdown.Content className="w-48">
        <Menu
          menuItems={[
            {
              id: "1",
              title: "My profile",
              href: "/profile",
            },
            {
              id: "2",
              title: "Team settings",
              href: "/team",
            },
            {
              id: "3",
              title: "My data",
              href: "/my-data",
            },
            {
              id: "4",
              title: "Logout",
              action: () => {
                // Handle logout logic
                const isDarkNow =
                  document.documentElement.getAttribute("data-mode") === "dark";
                document.documentElement.setAttribute(
                  "data-mode",
                  isDarkNow ? "light" : "dark",
                );
              },
              icon: "logout",
            },
          ]}
          onMenuItemClick={() => setIsOpen(false)}
        />
      </Dropdown.Content>
    </Dropdown>
  );
};

export default AuthDropdown;
