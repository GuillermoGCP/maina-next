'use client'
import { useState, useEffect } from 'react'
import { AiOutlineArrowUp as ArrowUp } from 'react-icons/ai'

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 300) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={` hover:scale-110 hover:border fixed bottom-6 right-6 p-3 rounded-full bg-[#515d4f] text-white shadow-lg transition-all duration-300 ease-in-out
        ${
          showScroll
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-0 pointer-events-none'
        }
      `}
      aria-label='Volver arriba'
    >
      <ArrowUp className='w-5 h-5' />
    </button>
  )
}

export default ScrollToTopButton
