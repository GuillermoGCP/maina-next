'use client'

import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'

const ContactModal = ({ isOpen, onClose }) => {
  const [isRendered, setIsRendered] = useState(isOpen)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true)
      const animationFrameId = window.requestAnimationFrame(() => {
        setIsVisible(true)
      })

      return () => window.cancelAnimationFrame(animationFrameId)
    }

    setIsVisible(false)

    if (!isRendered) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setIsRendered(false)
    }, 360)

    return () => window.clearTimeout(timeoutId)
  }, [isOpen, isRendered])

  useEffect(() => {
    if (!isRendered) return

    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isRendered, onClose])

  if (!isRendered) return null

  return (
    <div
      className='fixed inset-0 z-[100] flex items-center justify-center px-4'
      role='dialog'
      aria-modal='true'
      aria-labelledby='contact-modal-title'
    >
      <div
        className={`absolute inset-0 bg-black/45 backdrop-blur-[2px] transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? 'duration-300' : 'duration-200'
        } ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        className={`relative z-10 w-full max-w-[440px] rounded-[28px] bg-[#fcfcfa] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-all ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-8 ${
          isVisible ? 'duration-550' : 'duration-300'
        } ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-8 scale-[0.96] opacity-0'
        }`}
      >
        <div className='mb-6 flex justify-end'>
          <button
            type='button'
            onClick={onClose}
            className='text-2xl text-[#6a6a6a] transition hover:text-[#515d4f]'
            aria-label='Cerrar modal de contacto'
          >
            <FiX />
          </button>
        </div>

        <div className='flex flex-col items-center text-center'>
          <div className='mb-8 flex h-[124px] w-[255px] items-center justify-center bg-[#5f685b]'>
            <img
              src='/logo.jpg'
              alt='Logo de Maina'
              className='h-full w-full object-contain'
            />
          </div>

          <h2
            id='contact-modal-title'
            className='mb-4 text-2xl font-semibold text-[#515d4f] md:text-3xl'
          >
            Contacto
          </h2>

          <div className='mb-6 h-px w-full bg-[#e7e1d7]' />

          <p className='text-base leading-7 text-[#333] md:text-lg'>
            Puedes contactar con nosotros en{' '}
            <a
              href='mailto:mainagastronomia@gmail.com'
              className='font-semibold text-[#515d4f] underline underline-offset-4 transition hover:text-[#6a735e]'
            >
              mainagastronomia@gmail.com
            </a>
            . Te responderemos lo antes posible. Muchas gracias.
          </p>

          <a
            href='mailto:mainagastronomia@gmail.com'
            className='mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#a3a3a3] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#8e8e8e]'
          >
            Escribir un correo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
