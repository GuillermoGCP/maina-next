import NavMenu from './NavMenu'
import SocialNetIcons from './SocialNetIcons'
import Banner from './Banner'

const Header = () => {
  return (
    <>
      {/* <Banner /> */}
      <header className='w-full grid grid-cols-3 items-center px-6 py-4 bg-[#515d4f] shadow-md h-[20vh] relative'>
        <div className='flex justify-start'>
          <SocialNetIcons />
        </div>

        <div className='flex justify-center h-20 md:h-28'>
          <img
            src='/logo.jpg'
            alt='Logo del restaurante Maina'
            className='object-contain w-full h-full'
          />
        </div>

        <div className='flex justify-end'>
          <NavMenu />
        </div>
      </header>
    </>
  )
}

export default Header
