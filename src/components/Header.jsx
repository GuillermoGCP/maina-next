import Image from 'next/image'
import NavMenu from './NavMenu'
import SocialNetIcons from './SocialNetIcons'
import Banner from './Banner'

const Header = () => {
  return (
    <>
      <Banner />
      <header className='w-full flex items-center justify-around px-6 py-4 bg-[#515d4f] shadow-md h-[20vh] gap-2 basis-1/4 relative'>
        <div className='md:basis-1/4'>
          <SocialNetIcons />
        </div>

        <div className='relative md:basis-1/4 h-20 md:h-28 flex justify-center items-center min-w-[165px] min-h-[108px]'>
          <Image
            src='/images/maina2.jpg'
            alt='Logo del restaurante Maina'
            fill
            className='object-contain'
            priority
          />
        </div>

        <NavMenu />
      </header>
    </>
  )
}

export default Header
