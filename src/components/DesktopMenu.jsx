'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const DesktopMenu = ({ elementsArr, onOpenContactModal }) => {
  const pathname = usePathname()
  return (
    <ul className='hidden md:flex flex-row justify-center items-center text-sm lg:text-base gap-6 text-[#333]'>
      {elementsArr.map((element, index) => {
        const isActive = element.link === pathname
        return (
          <li key={index}>
            {element.action === 'contact-modal' ? (
              <button
                type='button'
                onClick={onOpenContactModal}
                className='transition ease-in-out duration-300 px-2 py-1 rounded-md hover:text-white cursor-pointer'
              >
                {element.text}
              </button>
            ) : (
              <Link
                href={element.link}
                className={twMerge(
                  'transition ease-in-out duration-300 px-2 py-1 rounded-md',
                  isActive
                    ? 'text-white cursor-default pointer-events-none'
                    : 'hover:text-white '
                )}
              >
                {element.text}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}
export default DesktopMenu
