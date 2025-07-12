import FloatingButton from './FloatingButton'
import Paragraph from './Paragraph'
import { introTitle, textBlocks } from '../data/textMain'

const MainComponent = () => {
  return (
    <main className='flex-1'>
      <div className='main-section bg-[#f5f5f5] py-6 px-4 text-center min-h-[calc(100vh-150px)]'>
        <div className='relative w-screen h-[80vh] overflow-hidden'>
          <img
            src='/main.jpeg'
            alt='Imagen de la sala principal del restaurante Maina'
            className='object-cover w-full h-full'
          />
          <FloatingButton text='Reservas' link='/reservations' />
        </div>
        <Paragraph titleParts={introTitle} paragraphs={textBlocks} />

        <div className='my-6 flex flex-col gap-6 items-center'>
          <img
            src='/main02.jpeg'
            alt='Imagen del restaurante'
            width={800}
            height={600}
            className='rounded-lg shadow-md w-full max-w-[80%] h-auto'
          />
          <img
            src='/main03.jpeg'
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
