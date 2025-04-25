import { twMerge } from 'tailwind-merge'
const Paragraph = ({ titleParts, paragraphs, textColor }) => {
  return (
    <section className={`text-center mt-8 w-fit mx-auto`}>
      <h1
        className={twMerge(
          'text-xl sm:text-2xl md:text-3xl  lg:text-4xl p-4 font-bold',
          textColor ? textColor : 'text-[#6a735e]'
        )}
      >
        {titleParts.normal}
        <span className='font-bold '> {titleParts.highlight}</span>
        {titleParts.end}
      </h1>

      {paragraphs &&
        paragraphs.map((text, index) => {
          return (
            <p
              key={index}
              className='max-w-3xl mx-auto mt-6 text-sm md:text-base text-[#333] leading-relaxed px-4 '
            >
              {text}
            </p>
          )
        })}
    </section>
  )
}

export default Paragraph
