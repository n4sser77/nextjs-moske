'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import services from '@/app/data/services';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [

  {
    title: "Bönetider",
    href: "/bonetider",
  },
  {
    title: "Om Islam",
    href: "/om-islam",
  },
  {
    title: 'kontakt',
    href: '/kontakt',
  }
]

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={clsx(
              "px-3 py-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 sm:text-xs",
              {

                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}

          >

            <p className=" md:block">{link.title}</p>
          </Link>
        );
      })}
    </>
  );
}
