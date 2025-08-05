'use client'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.svg'
import menuIcon from '@/public/menu-icon.svg'

export default function Navbar() {
  return (
    <nav className="flex justify-center relative lg:justify-between py-4 w-full lg:max-w-screen-xl mx-auto">
      {/* Logo */}
      <div className="flex items-center justify-center g-[10px] w-full lg:w-auto">
        <Image
          src={logo}
          alt="Fametonic Logo"
          width={169}
          height={72}
          className="w-[107px] h-[46px] md:w-[169px] md:h-[72px]"
        />

        <Image 
          src={menuIcon}
          alt="Menu Logo"
          width={20}
          height={12}
          className="lg:hidden absolute right-[20px]"  
        />
      </div>

      {/* Navigation Items */}
      <ul className="hidden md:flex gap-[40px] text-sm font-medium text-gray-400">
        <li className='font-figtree font-semibold text-[18px] leading-none tracking-normal'>
          <Link href="#" className="">
            About Us
          </Link>
        </li>
        <li className='font-figtree font-semibold text-[18px] leading-none tracking-normal'>
          <Link href="#" className="">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile menu icon (we can add later) */}
    </nav>
  )
}
