'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

type HeaderLinkProps = {
    href: string,
    label: string
}

const HeaderLink = ({href, label} : HeaderLinkProps) => {
    const pathname = usePathname();

  return (
    <Link href={href} className={`p-2 rounded-md block font-semibold ${pathname == href ? `bg-secondary text-white` : `text-black hover:bg-secondary duration-300 hover:text-white`}`}>{label}</Link>
  )
}

export default HeaderLink