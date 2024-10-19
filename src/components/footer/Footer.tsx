import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";
import Button from "../ui/Button";

const menuGroups = [
  {
    groupTitle: "About Us",
    items: [
      {
        title: "Company History",
        path: "/about",
      },
      {
        title: "Meet the Team",
        path: "/products",
      },
      {
        title: "Employee Handbook",
        path: "/contact",
      },
      {
        title: "Careers",
        path: "/help",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mx-auto container px-4 pb-6 pt-16 sm:px-6 lg:px-8">
      <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">About Us</p>

          <ul className="mt-3 space-y-4 text-sm">
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Company History
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Meet the Team
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Employee Handbook
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Our Services</p>

          <ul className="mt-3 space-y-4 text-sm">
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Web Development
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Web Design
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Marketing
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Google Ads
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Resources</p>

          <ul className="mt-3 space-y-4 text-sm">
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Online Guides
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Conference Notes
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Forum
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Downloads
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Upcoming Events
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Helpful Links</p>

          <ul className="mt-3 space-y-4 text-sm">
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                FAQs
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Support
              </Link>
            </li>

            <li>
              <Link className="group flex gap-1.5" href="#">
                <span className="text-gray-700 transition group-hover:text-gray-700/75">
                  Live Chat
                </span>

                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
          <p className="text-lg font-medium text-gray-900">Stay in Touch</p>
          <div className="mx-auto mt-3 max-w-md sm:ms-0">
            <form className="w-full">
              <label htmlFor="UserEmail" className="sr-only">
                Email
              </label>

              <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="john@rhcp.com"
                  className="w-full bg-transparent border-none focus:border-transparent focus:ring-transparent active:border-transparent active:ring-transparent sm:text-sm"
                />

                <Button>Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
        <p className="text-center text-sm text-gray-500 sm:text-left">
          Copyright &copy; 2022. All rights reserved.
        </p>

        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
