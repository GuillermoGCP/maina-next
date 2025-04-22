import WaveDivider from './WaveDivider'

const Footer = () => {
  return (
    <>
      <WaveDivider />
      <footer className='bg-[#515d4f] text-white py-10 px-6 text-sm'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Dirección y contacto */}
          <div className='space-y-3 text-center md:text-left'>
            <h3 className='text-lg font-semibold uppercase tracking-wide'>
              Maina gastronomía
            </h3>
            <p>Avenida del Ferrol 7, 15706</p>
            <p>Santiago de Compostela, Galicia</p>
            <p>
              <strong>Teléfono de reservas:</strong>{' '}
              <a
                href='tel:+34881302851'
                className='hover:underline text-yellow-400 transition-colors duration-200'
              >
                +34 881 30 28 51
              </a>
            </p>
          </div>

          {/* Horarios */}
          <div className='space-y-3 text-center md:text-left'>
            <h3 className='text-lg font-semibold uppercase tracking-wide'>
              Horario
            </h3>
            <ul className='space-y-1'>
              <li>
                <strong>Lunes y martes:</strong> 13:30 - 16:00
              </li>
              <li>
                <strong>Miércoles a sábado:</strong> 13:30 - 16:00 / 20:30 -
                23:00
              </li>
              <li>
                <strong>Domingo:</strong> Cerrado
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
