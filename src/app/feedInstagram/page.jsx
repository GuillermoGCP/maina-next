import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import instagramPosts from '../../data/instagramBlocks'
import Paragraph from '@/components/Paragraph'

const FeedInstagram = () => {
  const introTitle = {
    normal: 'Algunos de',
    highlight: ' nuestros ',
    end: ' platos.',
  }
  return (
    <div className='px-4 py-12 bg-[#f9f9f9] bg-[url("/hall01.jpg")] bg-cover bg-center bg-no-repeat'>
      <div className='max-w-6xl mx-auto text-center bg-white/85 rounded-4xl overflow-hidden'>
        <div className='mb-8 p-6'>
          <Paragraph titleParts={introTitle} />
        </div>

        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className='h-[420px] flex flex-col justify-between'
            >
              <a href={post.url} target='_blank' rel='noopener noreferrer'>
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={600}
                  height={600}
                  className='w-full h-80 object-contain transform transition-transform duration-300 ease-in-out hover:scale-105'
                />
              </a>
              <p className='text-[#515d4f] text-sm'>{post.alt}</p>
              <div className='flex items-center justify-center gap-2 py-3 text-[#8b998b] text-sm'>
                <FaInstagram className='w-5 h-5 fill-current inline-block' />
                <a
                  href={post.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  Ver en Instagram
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default FeedInstagram
