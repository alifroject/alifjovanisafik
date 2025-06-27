"use client";

import * as React from "react";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void; // <- Add this
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
  onClick,
}) => {
  return (
    <li>
      <a
        href={href}
        onClick={onClick} // <- Use it here
        className="block text-6xl bg-white text-white transition-colors hover:text-neutral-300 max-md:text-5xl max-sm:text-4xl"
      >
        {children}
      </a>
    </li>
  );
};
