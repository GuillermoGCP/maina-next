import Link from 'next/link'

const NavMenu = () => {
  return (
    <nav>
      <div className='md:hidden text-white text-xl cursor-pointer'>☰</div>
      <ul className='text-sm lg:text-base hidden md:flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-6 text-[#333] font-[var(--font-roboto)]'>
        <li>
          <Link
            href='/reservations.html'
            className=' hover:text-white transition ease-in-out duration-500'
          >
            Reservas
          </Link>
        </li>
        <li>
          <Link
            href='https://maina.solo.revointouch.works/maina/digital-menu'
            target='_blank'
            rel='noopener noreferrer'
            className=' hover:text-white transition ease-in-out duration-500'
          >
            Carta
          </Link>
        </li>
        <li>
          <Link
            href='/group-menus.html'
            className=' hover:text-white transition ease-in-out duration-500'
          >
            Menús grupos
          </Link>
        </li>
        <li>
          <Link
            href='/feedInstagram.html'
            className=' hover:text-white transition ease-in-out duration-500'
          >
            Feed Instagram
          </Link>
        </li>
        <li>
          <Link
            href='/us.html'
            className=' hover:text-white transition ease-in-out duration-500'
          >
            Quiénes somos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
