'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'

const MobileMenu = ({ elementsArr }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <div
        className='md:hidden text-white text-2xl cursor-pointer p-2 z-50 relative'
        onClick={toggleMenu}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {isOpen && (
        <ul className='absolute flex md:hidden  top-full left-1/2 transform -translate-x-1/2 w-[200px] bg-[#515d4f] flex-col p-6 z-40 text-sm gap-6 text-white font-[var(--font-roboto)] rounded-lg shadow-lg'>
          {elementsArr.map((element, index) => {
            const isActive = element.link === pathname
            return (
              <li
                key={index}
                className={twMerge(
                  'transition duration-200',
                  isActive
                    ? 'text-yellow-300 font-semibold bg-[#6b786a] px-3 py-1 rounded-md'
                    : 'hover:text-yellow-300 hover:font-semibold hover:bg-[#6b786a] hover:px-3 hover:py-1 hover:rounded-md'
                )}
              >
                <Link href={element.link} onClick={() => setIsOpen(false)}>
                  {element.text}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
export default MobileMenu
