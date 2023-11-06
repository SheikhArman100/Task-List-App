"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const ActiveLink = ({href,icon,label}) => {
    const currentRoute = usePathname();
  return (
    <Link
      href={href}
      className={`flex items-center gap-x-2 p-2 w-full rounded-lg text-sm font-medium ${
        currentRoute === href ? "bg-[#393939]" : null
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

export default ActiveLink