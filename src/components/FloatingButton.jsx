import Image from 'next/image'

const FloatingButton = ({ text, link }) => {
  return (
    <a
      href={link}
      className='absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#515d4f] text-white px-6 py-3 text-xl rounded shadow-lg transition hover:bg-white hover:text-[#515d4f]'
    >
      {text}
    </a>
  )
}
export default FloatingButton
