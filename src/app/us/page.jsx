import Paragraph from '@/components/Paragraph'

const Us = () => {
  const introTitle = {
    normal: 'Nuestro',
    highlight: ' equipo',
    end: ' ',
  }
  return (
    <div
      id='inicio'
      className=' pb-12 pt-4 px-4 sm:px-8 md:px-16 bg-[url("/hall02.jpg")] bg-cover bg-center bg-no-repeat bg-[#f9f9f9] text-center'
    >
      <div className='rounded-4xl mx-auto bg-gray-50/50 mb-4 max-w-[80%]'>
        <Paragraph titleParts={introTitle} textColor='text-white' />
      </div>

      <img
        src='/quienes-somos.jpeg'
        alt='Imagen de la sala principal del restaurante Maina'
        className='mx-auto rounded-2xl shadow-lg max-w-full h-auto'
      />
    </div>
  )
}

export default Us
