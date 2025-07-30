'use client'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.svg'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 max-w-screen-xl mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Fametonic Logo"
          width={169}
          height={72}
        />
        {/* <span className="text-xl font-bold tracking-tight">Fametonic</span> */}
      </div>

      {/* Navigation Items */}
      <ul className="hidden md:flex gap-[40px] text-sm font-medium">
        <li>
          <Link href="#" className="">
            About Us
          </Link>
        </li>
        <li>
          <Link href="#" className="">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile menu icon (we can add later) */}
    </nav>
  )
}
