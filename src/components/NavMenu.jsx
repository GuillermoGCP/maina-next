import elementsArr from '@/data/navRoutes'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const NavMenu = () => {
  return (
    <nav className='relative z-50'>
      <MobileMenu elementsArr={elementsArr} />
      <DesktopMenu elementsArr={elementsArr} />
    </nav>
  )
}

export default NavMenu
