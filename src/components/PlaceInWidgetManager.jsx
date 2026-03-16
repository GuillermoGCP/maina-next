'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const PlaceInWidgetManager = () => {
  const pathname = usePathname()

  useEffect(() => {
    // 1. Cleanup everything before starting
    const cleanup = () => {
      // Remove all PlaceIn scripts
      const scripts = document.querySelectorAll('script[src*="getplacein.com/widget.js"]')
      scripts.forEach(s => s.remove())

      // Remove all PlaceIn UI elements
      const selectors = [
        '.placein-fab',
        '.placein-modal',
        '.placein-modal-overlay',
        '.placein-inline-container',
        '#placein-widget-styles'
      ]
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove())
      })

      // Also clean any content inside the inline container if it exists
      const inlineContainer = document.getElementById('placein-reservations')
      if (inlineContainer) {
        inlineContainer.innerHTML = ''
      }
    }

    cleanup()

    // 2. Normalize pathname (handle trailing slashes)
    const normalizedPath = pathname.replace(/\/$/, '') || '/'
    const isReservationsPage = normalizedPath === '/reservations'

    // 3. Inject the correct version
    const script = document.createElement('script')
    script.src = 'https://getplacein.com/widget.js'
    script.dataset.slug = 'restaurante-maina'
    script.async = true

    if (isReservationsPage) {
      // Inline mode for the specific page
      script.dataset.mode = 'inline'
      script.dataset.container = 'placein-reservations'
    } else {
      // Floating button mode for the rest of the site
      script.dataset.mode = 'button'
      script.dataset.position = 'right'
      script.dataset.buttonText = 'Reservar una mesa'
    }

    document.body.appendChild(script)

    return () => cleanup()
  }, [pathname])

  return null
}

export default PlaceInWidgetManager
