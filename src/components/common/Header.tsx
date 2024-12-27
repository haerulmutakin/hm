'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import menus from "@/lib/menus.constant"
import AppButton from "../ui/button/AppButton"
import { RxHamburgerMenu } from "react-icons/rx"

const Header = () => {
  const pathname = usePathname()
  return (
    <header>
      <div className="py-1 md:py-4 flex justify-between items-center">
        <Link href='/'>
          <h1 className="font-bold text-3xl md:text-4xl">HM</h1>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {menus.map((menu, index) => (
            <Link
              href={menu.path}
              key={index}
              className={`${pathname === menu.path && 'border-primary text-primary'}`}
            >{menu.label}</Link>
          ))}
        </div>
        <div className="hidden md:flex">
          <Link href='/resume'>
            <AppButton label="Contact Me" />
          </Link>
        </div>
        <RxHamburgerMenu size={22} className="md:hidden" />
      </div>
    </header>
  )
}

export default Header