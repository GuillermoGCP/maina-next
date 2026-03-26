'use client'
import elementsArr from '@/data/navRoutes'
import { useState } from 'react'
import ContactModal from './ContactModal'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const NavMenu = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <nav className='relative z-50'>
        <MobileMenu
          elementsArr={elementsArr}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
        <DesktopMenu
          elementsArr={elementsArr}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
      </nav>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}

export default NavMenu
