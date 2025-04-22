import Image from 'next/image'
import FloatingButton from './FloatingButton'
import Paragraph from './Paragrath'
import Banner from './Banner'

const MainComponent = () => {
  const textBlocks = [
    'Maina es más que un restaurante; es un rincón acogedor donde la cocina de mercado se combina con el cariño de un trato cercano...',
    'Nuestra cocina es honesta, saludable y llena de matices...',
  ]

  const introTitle = {
    normal: 'Descubre el',
    highlight: 'placer de la',
    end: ' cocina de proximidad.',
  }
  return (
    <main className='flex-1'>
      <Banner />
      <div className='main-section bg-[#f5f5f5] py-6 px-4 text-center min-h-[calc(100vh-150px)]'>
        <div className='relative w-screen h-[80vh] overflow-hidden'>
          <Image
            src='/images/sala3-comp.jpeg'
            alt='Imagen de la sala principal del restaurante Maina'
            fill
            className='object-cover'
            priority
          />
          <FloatingButton text='Reservas' link='./reservations.html' />
        </div>
        <Paragraph titleParts={introTitle} paragraphs={textBlocks} />

        <div className='my-6 flex flex-col gap-6 items-center'>
          <Image
            src='/images/Maina-Gastronomia67.jpeg'
            alt='Imagen del restaurante'
            width={800}
            height={600}
            className='rounded-lg shadow-md w-full max-w-[80%] h-auto'
          />
          <Image
            src='/images/Maina-Gastronomia74.jpeg'
            alt='Otra imagen del restaurante'
            width={800}
            height={600}
            className='rounded-lg shadow-md w-full max-w-[80%] h-auto'
          />
        </div>
      </div>
    </main>
  )
}

export default MainComponent
