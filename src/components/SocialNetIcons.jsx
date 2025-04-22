import { FaInstagram, FaFacebookF } from 'react-icons/fa'
const SocialNetIcons = () => {
  return (
    <div className='flex space-x-4 mb-2 items-center justify-center'>
      <a
        href='https://www.instagram.com/maina.gastronomia/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-white hover:text-[#d1d5db] text-lg sm:text-xl md:text-2xl transition'
      >
        <FaInstagram />
      </a>
      <a
        href='https://www.facebook.com/p/Maina-Gastronom%C3%ADa-61558992767307/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-white hover:text-[#d1d5db] text-lg sm:text-xl md:text-2xl transition'
      >
        <FaFacebookF />
      </a>
    </div>
  )
}
export default SocialNetIcons
