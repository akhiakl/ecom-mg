import Facebook from "@/icons/Facebook";
import Github from "@/icons/Github";
import Instagram from "@/icons/Instagram";
import Twitter from "@/icons/Twitter";
import Link from "next/link";
import React from "react";

const SocialLinks = () => (
  <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
    <li>
      <a href="#" rel="noreferrer" target="_blank">
        <span className="sr-only">Facebook</span>
        <Facebook size="large" aria-hidden="true" />
      </a>
    </li>

    <li>
      <a href="#" rel="noreferrer" target="_blank">
        <span className="sr-only">Instagram</span>
        <Instagram size="large" aria-hidden="true" />
      </a>
    </li>

    <li>
      <a href="#" rel="noreferrer" target="_blank">
        <span className="sr-only">Twitter</span>
        <Twitter size="large" aria-hidden="true" />
      </a>
    </li>

    <li>
      <Link href="#" rel="noreferrer" target="_blank">
        <span className="sr-only">GitHub</span>
        <Github size="large" aria-hidden="true" />
      </Link>
    </li>
  </ul>
);

export default SocialLinks;
